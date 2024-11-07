<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="../style/base/color.css">
    <link rel="stylesheet" href="../style/base/base.css">
    <link rel="stylesheet" href="../style/base/flex.css">
    <link rel="stylesheet" href="../style/pages/dashboard.css">
    <link rel="stylesheet" href="../style/fontawesome/css/font-awesome.min.css">
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
                        <h3> Dashboard</h3>
                    </a>
                </div>
            </nav>
        </div>
        <div class="main">
            <div class="flex justify-content-evenly align-items-center justify-content-space-around flex-wrap box-container ">
                <div class="flex align-items-center justify-content-space-between box ">
                    <div class="topic">
                        <h2 id="incomes" class="topic-heading ">0</h2>
                        <h2 class="topic-title">Incomes</h2>
                    </div>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </div>

                <div class="flex align-items-center justify-content-space-between box ">
                    <div class="topic">
                        <h2 id="expenses" class="topic-heading">0</h2>
                        <h2 class="topic-title">Expenses</h2>
                    </div>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </div>

                <div class="flex align-items-center justify-content-space-between box ">
                    <div class="topic">
                        <h2 id="balance" class="topic-heading">0</h2>
                        <h2 class="topic-title">Balance</h2>
                    </div>
                    <i class="fa fa-balance-scale" aria-hidden="true"></i>
                </div>
            </div>

            <div class="report-container">
                <div class="report-header">
                    <h1 class="recent-Articles">Tracking Report</h1>
                    <div class="report-btn flex flex-wrap align-content-center justify-content-center align-items-center">
                        <button id="transaction_btn" class="view">Add</button>
                    </div>

                </div>
                <div class="report-body">
                    <div class="report-btn flex flex-wrap align-content-center justify-content-center align-items-flex-end">
                        <select id="type_filter">
                            <option value="">Select Transction Type</option>
                            <option value="expenses">Expenses</option>
                            <option value="incomes">Incomes</option>
                        </select>
                        <div class="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
                            <label for="from_date">From Date</label>
                            <input id="from_date" type="date" placeholder="from date">  
                        </div>
                        <div class="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
                            <label for="to_date">To Date</label>
                            <input id="to_date" type="date" placeholder="to date">  
                        </div>

                        <input id="filter_note" type="text" placeholder="Search by Note">  
                        <select id="price_filter">
                            <option value="">Select Price Filter</option>
                            <option value="ascending">From min to max</option>
                            <option value="descending">From max to min</option>
                        </select>
    
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Transction Amount</th>
                                <th>Balance</th>
                                <th>Transction type</th>
                                <th>Note</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="table_body">
                        </tbody>
                
                    </table>
                </div>
            
            </div>
        </div>
    </div>
    <div id="form_model" class="modal">
        <div class="modal-content">
            <input type="hidden" id="is_edit" value="0">
            <div class="form flex flex-direction-column">
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="amount">Amount</label>
                    <input id="amount" type="text"/>
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="date">Date</label>
                    <input id="date" type="date"/>
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select Type</label>
                    <select id="transaction_type">
                        <option value="incomes">Incomes</option>
                        <option value="expenses">Expenses</option>
                    </select>
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="date">Note</label>
                    <textarea id="note"></textarea>
                </div>

                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="submit_form" class="view" type="button">Submit</button>
                    <button id="close_form_model" class="view" type="button">Close</button>
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


    <script src="../js/dashboard/transaction.js"></script>
    <script src="../js/dashboard/event.js"></script>
    <script src="../js/dashboard/filter.js"></script>
</body>
</html>