<?php

include "conection.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

if(isset($_POST['submit_login_form'])){
    if($_POST['username'] != '' && $_POST['password'] != ''){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $hash = password_hash($password,PASSWORD_DEFAULT);
        

        $check_user_query = $conection->prepare("Select * from users_tbl where username=?  ");
        $check_user_query->bind_param('s',$username);
        $check_user_query->execute();
        $check_user = $check_user_query->get_result();
        if($check_user->num_rows == 0){
            $inser_user = $conection->prepare("insert into users_tbl(username,password) values(?,?) ");
            $inser_user->bind_param("ss",$username,$hash);
            $inser_user->execute();

            $_SESSION['login_id'] = $inser_user->insert_id;
            $response = [
                "states" => "1",
            ];
    
        }else{
            $user= $check_user->fetch_assoc();
            $password_db =  $user['password'];
            if(password_verify($password,$password_db)){
                $user_id =  $user['user_id'];
                $_SESSION['login_id'] = $user_id;
    
                $response = [
                    "states" => "1"
                ];
            }else{
                $response = [
                    "states" => "0"
                ];
            }

        }
        echo  json_encode($response)  ;

        
    }else{
        $response = [
            "states" => "0",
        ];
        echo  json_encode($response)  ;

    }
}
if(isset($_POST['submit_transaction_form'])   ){
    $amount = $_POST['amount'];
    $date = $_POST['date'];
    $transaction_type = $_POST['transaction_type'];
    $note = $_POST['note'];
    $user_login_id = isset($_SESSION['login_id']) ? $_SESSION['login_id'] : 1;
    $transaction_id= $_POST['transaction_id'];
    if($transaction_id == 0){
        $insert_transaction = $conection->prepare("insert into transactions_tbl(amount,date,transaction_type,note,user_login_id) values(?,?,?,?,?) ");
        $insert_transaction->bind_param("ssssi",$amount,$date,$transaction_type,$note,$user_login_id);

        $insert_transaction->execute();

        $response = [
            "message" => "insert"
        ];
        echo  json_encode($response)  ;

        
    }else{
        $update_transaction = $conection->prepare("update transactions_tbl set amount = ?,date=?,transaction_type=?,note=? where transaction_id=? ");
        $update_transaction->bind_param("ssssi",$amount,$date,$transaction_type,$note,$transaction_id);

        $update_transaction->execute();

        $response = [
            "message" => "update"
        ];
        echo  json_encode($response)  ;
    }
}
if(isset($_POST['get_transactions'])){

        $user_id = $_SESSION['login_id'];
        $get_transactions_query = $conection->prepare("SELECT * FROM `transactions_tbl` where user_login_id = ? ");
        $get_transactions_query->bind_param("i",$user_id);

        $get_transactions_query->execute();
        $get_transactions = $get_transactions_query->get_result();
        $transaction_array = [];
        if($get_transactions->num_rows > 0){
           
            while($transaction = $get_transactions->fetch_assoc()){
                $transaction_array[] = $transaction;
            }
            echo json_encode($transaction_array);

    
        }else{
            
            echo  json_encode($transaction_array)  ;

        }

        
    
}
if(isset($_POST['delete_transactions'])){
    $transaction_id= $_POST['transaction_id'];

    $delete_transactions_query = $conection->prepare("delete FROM `transactions_tbl` where transaction_id = ? ");
    $delete_transactions_query->bind_param("i",$transaction_id);

    $delete_transactions_query->execute();
    $response = [
        "message" => "delete"
    ];
    echo  json_encode($response)  ;

}
if(isset($_POST['check_login'])){

    
    if(isset($_SESSION['login_id'] )){
        $response = [
            "message" => "1"
        ];
        echo  json_encode($response);
    }else{
        $response = [
            "message" => "0"
        ];
        echo  json_encode($response);
    }

}
if(isset($_POST['check_logout'])){
    session_destroy();
    $response = [
        "states" => "1"
    ];
    echo  json_encode($response);
}


