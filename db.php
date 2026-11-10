<?php
// Shared PDO connection for GovScheme AI.
// Database: govscheme_ai
// User table: users

$host = "localhost";
$dbname = "govscheme_ai";
$username = "root";
$password = "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    header("Content-Type: application/json; charset=utf-8");
    exit(json_encode([
        "success" => false,
        "message" => "Database connection failed."
    ]));
}
?>
