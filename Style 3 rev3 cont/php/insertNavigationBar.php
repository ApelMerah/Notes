<?php

include 'connect.php';
session_start();

if ($_SESSION["username"] != NULL) {
    echo '1';
}
else {
    echo '-1';
}

