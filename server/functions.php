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
if(isset($data['submit_transaction_form']) && isset($data['code']) ){
    $code = $data['code'];
    $amount = $data['amount'];
    $date = $data['date'];
    $transaction_type = $data['transaction_type'];
    $note = $data['note'];
    $user_login_id = $_SESSION['login_id'];

    if($data['code'] == 0){
        $insert_transaction = $conection->prepare("insert into transactions_tbl(code,amount,date,transaction_type,note,user_login_id) values('$code','$amount','$date','$transaction_type','$note','$user_login_id') ");
        $insert_transaction->execute();

        $response = [
            "message" => "insert",
            'data' => $data,
        ];
        echo  json_encode($response)  ;

        
    }else{
        $response = [
            "message" => "Please fill data "
        ];
        $update_transaction = $conection->prepare("update transactions_tbl set amount = '$amount',date='$date',transaction_type='$transaction_type',note='$note' where code='$code' ");
        $update_transaction->execute();

        $response = [
            "message" => "update"
        ];
        echo  json_encode($response)  ;
    }
}
if(isset($data['get_transactions'])){

    

        $get_transactions_query = $conection->prepare("SELECT * FROM `transactions_tbl` ");
        $get_transactions_query->execute();
        $get_transactions = $get_transactions_query->get_result();
        if($get_transactions->num_rows > 0){
            $transaction_array = [];
            while($transaction = $get_transactions->fetch_assoc()){
                $transaction_array[] = $transaction;
            }
            echo json_encode($transaction_array);

            $response = [
                "message" => "true"
            ];
    
        }else{
            $response = [
                "message" => "empty transaction2",
                "data" => $data,
                "get_transactions" => $get_transactions,
                "get_transactions_query" => $get_transactions_query,
            ];
            echo  json_encode($response)  ;

        }

        
    
}
