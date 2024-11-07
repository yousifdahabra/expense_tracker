<?php

include "conection.php";

if(isset($_POST['submit_login_form'])){
    $response = [
        "message" => "submit_login_form"
      ];
      echo json_encode($response);
}
