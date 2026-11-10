<?php
header("Content-Type: application/json; charset=utf-8");
session_start();
require_once __DIR__ . "/../db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "POST request required."]);
    exit;
}

$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === "") {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Enter a valid email and password."]);
    exit;
}

try {
    $stmt = $pdo->prepare(
        "SELECT id, name, email, password_hash FROM users WHERE email = ? LIMIT 1"
    );
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user["password_hash"])) {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Incorrect email or password."]);
        exit;
    }

    session_regenerate_id(true);
    $_SESSION["user_id"] = $user["id"];
    $_SESSION["user_name"] = $user["name"];

    echo json_encode([
        "success" => true,
        "message" => "Login successful.",
        "user" => ["id" => $user["id"], "name" => $user["name"], "email" => $user["email"]]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Login failed. Check the users table columns."]);
}
?>
