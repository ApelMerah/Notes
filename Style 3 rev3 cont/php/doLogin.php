<?php

include 'connect.php';
session_start();

$username = $_POST["username"];
$password = $_POST["password"];

// $_SESSION["username"] = $username;  // Bypass login (Comment to disable Bypass)

$query = "SELECT * FROM user WHERE username = '" .  $username . "' AND password = '" . $password . "'";
$result = $connection->query($query);

// echo $result->num_rows < 1 ? '-1' : '1';

if ($result->num_rows < 1) {
    echo '-1';
}
else {
    $_SESSION["username"] = $username;
    echo '1';
}
