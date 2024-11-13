
import React from "react";
import axios from "axios";


const ReportBody = () =>{
    const get_transaction = async (transaction_id = 0) => {

        try{
            const post_method = await axios({
                method: 'post',
                url: 'http://localhost/expense_tracker/template/server/functions.php',
                data: {
                    get_transactions: 'true',
                    transaction_id :0,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
              })  
              console.log(post_method)
              return post_method.data;  
      
        }catch (error) {
            return [];  
        }
    }
    get_transaction()
    return (
        <div className="report-body">
        <div className="report-btn flex flex-wrap align-content-center justify-content-center align-items-flex-end">
            <select id="type_filter">
                <option value="">Select Transction Type</option>
                <option value="expenses">Expenses</option>
                <option value="incomes">Incomes</option>
            </select>
            <div className="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
                <label for="from_date">From Date</label>
                <input id="from_date" type="date" placeholder="from date"/>  
            </div>
            <div className="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
                <label for="to_date">To Date</label>
                <input id="to_date" type="date" placeholder="to date"/>  
            </div>

            <input id="filter_note" type="text" placeholder="Search by Note"/>  
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
    )
}

export default ReportBody;