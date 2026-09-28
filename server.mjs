import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Server folder:");
console.log(__dirname);

console.log("index.html exists:");
console.log(
    fs.existsSync(path.join(__dirname, "index.html"))
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve CSS, JS and other files
app.use(express.static(__dirname));

// Explicitly serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Image upload
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

// AI API test route
app.post("/api/chat", upload.single("image"), async (req, res) => {
    try {
        const message = req.body.message || "";
        const image = req.file;

        console.log("User message:", message);

        if (image) {
            console.log("Image received:", image.originalname);
        }

        let reply;

        if (image) {
            reply =
                "I received your image. Your question was: " +
                message;
        } else {
            reply =
                "I received your question: " +
                message;
        }

        res.json({
            reply: reply
        });

    } catch (error) {
        console.error("API Error:", error);

        res.status(500).json({
            reply: "Something went wrong on the server."
        });
    }
});

app.listen(PORT, () => {
    console.log("");
    console.log("=================================");
    console.log("GovScheme AI Server Started");
    console.log(`Website: http://localhost:${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/chat`);
    console.log("=================================");
});