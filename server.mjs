import "dotenv/config";
import express from "express";
import session from "express-session";
import multer from "multer";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ================= DATABASE ================= */

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "govscheme_ai",
    charset: "utf8mb4",
    waitForConnections: true,
    connectionLimit: 10
});

try {
    await pool.query("SELECT 1");
    console.log("✅ MySQL connected");
} catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    console.error("   Start MySQL and import schema.sql, then check DB_* values in .env");
    process.exit(1);
}

/* ================= OPENAI ================= */

// The website (login, saved schemes) works even without an OpenAI key;
// only the chatbot needs it.
let openai = null;

if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
} else {
    console.warn("⚠️  OPENAI_API_KEY not found in .env - chatbot is disabled, login still works.");
}
const MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

/* ================= MIDDLEWARE ================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET || "dev-only-change-me",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

// Serve ONLY the public front-end files (never server.mjs, .env, etc.)
const PUBLIC_FILES = ["index.html", "style.css", "script.js", "logo.png"];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

PUBLIC_FILES.forEach(file => {
    app.get("/" + file, (req, res) => {
        res.set("Cache-Control", "no-store");
        res.sendFile(path.join(__dirname, file));
    });
});

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }
});

function requireLogin(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({ success: false, message: "Please sign in first." });
    }
    next();
}

/* ================= AUTH ================= */

app.post("/api/register", async (req, res) => {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || password.length < 8) {
        return res.status(400).json({
            success: false,
            message: "Enter your name, a valid email, and a password of at least 8 characters."
        });
    }

    try {
        const hash = await bcrypt.hash(password, 10);
        const [result] = await pool.execute(
            "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
            [name, email, hash]
        );

        req.session.userId = result.insertId;
        req.session.userName = name;

        res.json({ success: true, message: "Account created.", name });
    } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ success: false, message: "This email is already registered." });
        }
        console.error(err);
        res.status(500).json({ success: false, message: "Could not create account." });
    }
});

app.post("/api/login", async (req, res) => {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    try {
        const [rows] = await pool.execute(
            "SELECT id, name, password_hash FROM users WHERE email = ?",
            [email]
        );
        const user = rows[0];

        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            return res.status(401).json({ success: false, message: "Email or password is incorrect." });
        }

        req.session.regenerate(err => {
            if (err) {
                return res.status(500).json({ success: false, message: "Login failed." });
            }
            req.session.userId = user.id;
            req.session.userName = user.name;
            res.json({ success: true, message: "Login successful.", name: user.name });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Login failed." });
    }
});

app.post("/api/logout", (req, res) => {
    req.session.destroy(() => res.json({ success: true }));
});

app.get("/api/me", (req, res) => {
    if (!req.session.userId) {
        return res.json({ loggedIn: false });
    }
    res.json({ loggedIn: true, name: req.session.userName });
});

/* ================= SAVED SCHEMES ================= */

app.get("/api/saved", requireLogin, async (req, res) => {
    const [rows] = await pool.execute(
        "SELECT scheme_id FROM saved_schemes WHERE user_id = ? ORDER BY created_at DESC",
        [req.session.userId]
    );
    res.json({ success: true, saved: rows.map(r => r.scheme_id) });
});

app.post("/api/saved", requireLogin, async (req, res) => {
    const schemeId = String(req.body.schemeId || "").slice(0, 100);
    if (!schemeId) {
        return res.status(400).json({ success: false, message: "Missing scheme." });
    }
    await pool.execute(
        "INSERT IGNORE INTO saved_schemes (user_id, scheme_id) VALUES (?, ?)",
        [req.session.userId, schemeId]
    );
    res.json({ success: true });
});

app.delete("/api/saved/:schemeId", requireLogin, async (req, res) => {
    await pool.execute(
        "DELETE FROM saved_schemes WHERE user_id = ? AND scheme_id = ?",
        [req.session.userId, req.params.schemeId]
    );
    res.json({ success: true });
});

/* ================= CHAT HISTORY ================= */

app.get("/api/history", requireLogin, async (req, res) => {
    const [rows] = await pool.execute(
        "SELECT question, answer, created_at FROM chat_history WHERE user_id = ? ORDER BY id DESC LIMIT 20",
        [req.session.userId]
    );
    res.json({ success: true, history: rows.reverse() });
});

/* ================= API TEST ================= */

app.get("/api/test", (req, res) => {
    res.json({ success: true, message: "GovScheme AI API is running", model: MODEL });
});

/* ================= GOVSCHEME AI ================= */

const systemInstructions = `
You are GovScheme AI Assistant.

Help users understand Indian government schemes,
scholarships, eligibility, documents, application process,
application status, payment problems, OTP problems,
login problems and document upload problems.

Rules:
- Use simple human-friendly language.
- You can answer in English, Hindi or Marathi.
- Do not claim to be a government officer.
- Do not guarantee eligibility.
- Do not invent scheme rules, amounts or deadlines.
- Tell users to verify important information on the official government portal.
- Never ask users for Aadhaar number, OTP, password, bank account number
  or other sensitive information.
- If a user has a scholarship/payment problem, explain practical steps.
- If the user uploads an image, analyze the visible error/message
  and explain what they can do.
`;

app.post("/api/chat", upload.single("image"), async (req, res) => {
    try {
        const message = (req.body.message || "").trim();
        const image = req.file;

        if (!openai) {
            return res.status(503).json({
                reply: "The AI assistant is not set up yet. Add OPENAI_API_KEY to the .env file and restart the server."
            });
        }

        if (!message && !image) {
            return res.status(400).json({ reply: "Please enter your question." });
        }

        if (image && !image.mimetype.startsWith("image/")) {
            return res.status(400).json({ reply: "Please upload a valid image file." });
        }

        const content = [];

        if (message) {
            content.push({ type: "input_text", text: message });
        }

        if (image) {
            const base64 = image.buffer.toString("base64");
            content.push({
                type: "input_image",
                image_url: `data:${image.mimetype};base64,${base64}`
            });
        }

        const response = await openai.responses.create({
            model: MODEL,
            instructions: systemInstructions,
            input: [{ role: "user", content }]
        });

        const reply = response.output_text || "Sorry, I could not generate a response.";

        // Save history only for logged-in users
        if (req.session.userId) {
            try {
                await pool.execute(
                    "INSERT INTO chat_history (user_id, question, answer) VALUES (?, ?, ?)",
                    [req.session.userId, message || "[image]", reply]
                );
            } catch (dbErr) {
                console.error("Could not save chat history:", dbErr.message);
            }
        }

        res.json({ reply });
    } catch (error) {
        console.error("OpenAI error:", error);

        let reply = "Sorry, something went wrong while connecting to AI.";

        if (error.status === 401) {
            reply = "OpenAI API key is invalid. Please check your .env file.";
        } else if (error.status === 429) {
            reply = "OpenAI API quota or billing limit reached. Please check your OpenAI account.";
        }

        res.status(500).json({ reply });
    }
});

/* ================= START ================= */

app.listen(PORT, () => {
    console.log("\n");
    console.log("       GovScheme AI Server");
    console.log("=================================");
    console.log(`Website: http://localhost:${PORT}`);
    console.log(`Model:   ${MODEL}`);
    console.log("=================================");
});
