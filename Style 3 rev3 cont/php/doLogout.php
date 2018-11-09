<?php

include 'connect.php';
session_start();

$_SESSION = array();

session_destroy();