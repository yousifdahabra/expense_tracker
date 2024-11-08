<?php

include "conection.php";
 //For login
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

if(isset($data['submit_login_form'])){
    if($data['username'] != '' && $data['password'] != ''){
        $username = $data['username'];
        $password = $data['password'];
        

        $check_user_query = $conection->prepare("Select * from users ");
        $check_user_query->execute();
        $check_user = $check_user_query->get_result();
        if($check_user->num_rows == 0){
            $inser_user = $conection->prepare("insert into users(username,password) values('$username','$password') ");
            $inser_user->execute();

            $_SESSION['login_id'] = $inser_user->insert_id;
    
        }else{
            $user_id = $check_user->fetch_assoc()['user_id'];
            $_SESSION['login_id'] = $user_id;
        }
        $response = [
            "message" => "true"
        ];
        echo  json_encode($response)  ;

        
    }else{
        $response = [
            "message" => "Please fill Username or Password "
        ];
        echo  json_encode($response)  ;

    }
}
if(isset($data['submit_transaction_form']) && isset($data['is_edit']) ){
    $code = $data['code'];
    $amount = $data['amount'];
    $date = $data['date'];
    $transaction_type = $data['transaction_type'];
    $note = $data['note'];
    $user_login_id = $_SESSION['login_id'];

    if($data['is_edit'] == 0){
        $insert_transaction = $conection->prepare("insert into transactions_tbl(code,amount,date,transaction_type,note,user_login_id) values('$code','$amount','$date','$transaction_type','$note','$user_login_id') ");
        $insert_transaction->execute();

        $response = [
            "message" => "true"
        ];
        echo  json_encode($response)  ;

        
    }else{
        $response = [
            "message" => "Please fill data "
        ];
        echo  json_encode($response)  ;

    }
}
