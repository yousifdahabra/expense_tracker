<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="./style/base/color.css">
    <link rel="stylesheet" href="./style/base/base.css">
    <link rel="stylesheet" href="./style/base/flex.css">
    <link rel="stylesheet" href="./style/pages/dashboard.css">
    <link rel="stylesheet" href="./style/index.css">
    <link rel="stylesheet" href="./style/fontawesome/css/font-awesome.min.css">
</head>
<body class="main-background-color">

    <header class="flex justify-content-space-between align-items-center second-background-color">
        <div class="logo-section flex align-items-center">
            <div class="logo header-text">Expense Tracker</div>
        </div>
    </header>
    
    <div class="flex main-container">
        <div class="nav-container">
            <nav class="flex flex-direction-column justify-content-space-between second-background-color nav">
                <div class="nav-options">
                    <a href="#" class="nav-option active">
                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                        <h3> Login</h3>
                    </a>
                </div>
            </nav>
        </div>
    </div>
    <div id="form_model" class="login-model">
        <div class="login-modal-content flex flex-direction-column align-items-center justify-content-center flex-wrap">
            <div class="form flex flex-direction-column">
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="User Name">User Name</label>
                    <input id="user_name" type="text"/>
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="Password">Password</label>
                    <input id="password" type="password"/>
                </div>

                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="submit_login_form" class="view" type="button">Submit</button>
                    <button id="close_login_form_model" class="view" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div id="delete_form_model" class="modal">
        <div class="modal-content">
            <div class="form align-items-center flex flex-direction-column">
                <input id="delete_id" type="hidden" value="0"/>

                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <h2>Are you sure?</h2>
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="close_delete_form_btn" class="view" type="button">Close</button>
                    <button id="submit_delete_form" class="view" type="button">Submit</button>
                </div>
            </div>
        </div>
    </div>


    <script src="./js/dashboard/transaction.js"></script>
    <script src="./js/dashboard/event.js"></script>
    <script src="./js/dashboard/filter.js"></script>
</body>
</html>