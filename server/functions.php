<?php

include "conection.php";

if(isset($_POST['submit_login_form'])){
    $response = [
        "message" => "submit_login_form",
        "username" => $_POST['username'],
        "password" => $_POST['password'],
      ];
      echo json_encode($response);
}
