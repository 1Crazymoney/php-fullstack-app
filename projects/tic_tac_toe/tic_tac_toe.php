<?php
session_start();
include("../../include/database.php");

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("Location: ../../login/login.php");
  exit;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  header("Location: ../../home/home.php");
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Tic Tac Toe game</h1>
    <div id="cells">
        <div class="cell" cellIndex="0"></div>
        <div class="cell" cellIndex="1"></div>
        <div class="cell" cellIndex="2"></div>
        <div class="cell" cellIndex="3"></div>
        <div class="cell" cellIndex="4"></div>
        <div class="cell" cellIndex="5"></div>
        <div class="cell" cellIndex="6"></div>
        <div class="cell" cellIndex="7"></div>
        <div class="cell" cellIndex="8"></div>
    </div>
    <label id="displayStatus">// Display the status...</label>
    <button id="restartButton">Restart Game</button>
    <script src="script.js"></script>
</body>

</html>
<?php
include("../../include/footer.php");
?>