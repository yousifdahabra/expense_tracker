
import React from "react";


const ReportBody = () =>{
    return (
        <div class="report-body">
        <div class="report-btn flex flex-wrap align-content-center justify-content-center align-items-flex-end">
            <select id="type_filter">
                <option value="">Select Transction Type</option>
                <option value="expenses">Expenses</option>
                <option value="incomes">Incomes</option>
            </select>
            <div class="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
                <label for="from_date">From Date</label>
                <input id="from_date" type="date" placeholder="from date"/>  
            </div>
            <div class="flex flex-direction-column flex-wrap align-content-center justify-content-center align-items-center">
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