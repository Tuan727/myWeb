<!-- filepath: /d:/Web Developement/register.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $score = 0;

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Create (connect to) SQLite database in file
    $db = new SQLite3('data.db');

    // Create table if not exists
    $db->exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, user TEXT, pass TEXT, score INTEGER)");

    // Insert data into table
    $stmt = $db->prepare("INSERT INTO users (user, pass, score) VALUES (:user, :pass, :score)");
    $stmt->bindValue(':user', $username, SQLITE3_TEXT);
    $stmt->bindValue(':pass', $hashed_password, SQLITE3_TEXT);
    $stmt->bindValue(':score', $score, SQLITE3_INTEGER);
    $stmt->execute();

    // Close the database connection
    $db->close();

    // Redirect to a success page (optional)
    header("Location: ../ogin.html");
    exit();
}
?>