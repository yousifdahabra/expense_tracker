<?php 
session_start();

$host = "localhost";
$username = "root";
$password = "";
$database = "expense_trackerdb";
$conection = new mysqli($host,$username,$password,$database);
if(!$conection)
    die("Error conection to the database ");
