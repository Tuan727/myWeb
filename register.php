<?php
// Connect to the SQLite database
$db = new PDO('sqlite:data.db');

// Create the table if it doesn't exist
$db->exec("CREATE TABLE IF NOT EXISTS users (
    user TEXT PRIMARY KEY,
    pass TEXT,
    score INTEGER
)");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $repeatPassword = $_POST['repeat-password'];

    // Validate password length
    if (strlen($password) < 8) {
        echo "Password must be at least 8 characters long!";
        exit();
    }

    // Validate passwords match
    if ($password !== $repeatPassword) {
        echo "Passwords do not match!";
        exit();
    }

    // Insert the user data into the database
    $stmt = $db->prepare("INSERT INTO users (user, pass, score) VALUES (?, ?, ?)");
    $stmt->execute([$username, $password, 0]);

    echo "Registration successful!";
}
?>
