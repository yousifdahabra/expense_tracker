<?php

include "conection.php";
 //For login
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

if(isset($data['submit_login_form'])){
    if($data['username'] != '' && $data['password'] != ''){
        $username = $data['username'];
        $password = $data['password'];
        

        $check_user = $conection->prepare("Select * from users where username=$username");

        
    }else{
        $response = [
            "message" => "Please fill Username or Password "
        ];
        echo  json_encode($response)  ;

    }
}else{
    $response = [
        "message" => "no post "
    ];
    echo  json_encode($response)  ;

}
