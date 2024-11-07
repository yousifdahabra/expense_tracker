<?php 

$conection = new mysqli("localhost","root","","expense_tracker");
if(!$conection)
    die("Error conection to the database ");
