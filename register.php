<?php
header("Content-Type: application/json; charset=utf-8");
require_once __DIR__ . "/../db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "POST request required."]);
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

if ($name === "" || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
    http_response_code(422);
    echo json_encode([
        "success" => false,
        "message" => "Enter a name, valid email, and password of at least 8 characters."
    ]);
    exit;
}

try {
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ? LIMIT 1");
    $check->execute([$email]);

    if ($check->fetch()) {
        http_response_code(409);
        echo json_encode(["success" => false, "message" => "This email is already registered."]);
        exit;
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)"
    );
    $stmt->execute([$name, $email, $hash]);

    echo json_encode(["success" => true, "message" => "Registration successful."]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Could not create account. Check the users table columns."]);
}
?>
