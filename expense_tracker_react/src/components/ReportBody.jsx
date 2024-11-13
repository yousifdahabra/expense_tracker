
import React, { useEffect, useState } from "react";
import axios from "axios";


const ReportBody = () =>{
    const [transaction, setTransaction] = useState([]);
    const deletTransaction = async (transaction_id) => {
        const data = new FormData();
        data.append("delete_transaction", 'true');
        data.append("transaction_id", transaction_id);
        axios
        .post("http://localhost/expense_tracker/template/server/functions.php",data,)
        .then((res) => {
            
            console.log(res)
         })
        .catch((error) => { 
         });
     }
     
    const getTransaction = async (transaction_id = 0) => {
        const data = new FormData();
        data.append("get_transactions", 'true');
        data.append("transaction_id", 0);
        axios
        .post("http://localhost/expense_tracker/template/server/functions.php",data,)
        .then((res) => {
            setTransaction(res.data)
         })
        .catch((error) => { 
         });
     }
     useEffect(() => {
        getTransaction();
      }, []);
     
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
                    {/* <th>Balance</th> */}
                    <th>Transction type</th>
                    <th>Note</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {                    
                    transaction?.map((t) => (
                        <tr className={t.transaction_type} >
                            <td>{t.transaction_id}</td>
                            <td>{t.amount} $</td>
                             
                            <td>{t.transaction_type}</td>
                            <td>{t.note}</td>
                            <td>{t.date}</td>
                            <td>
                                <button className="delete-btn view"
                                onClick={() => {
                                    console.log(t.transaction_id)
                                    
                                     deletTransaction(t.transaction_id)
                                
                                }}
                                  
                                
                                >Delete</button>
                            </td>
                        </tr>            
                    ))

               
                }
            </tbody>
    
        </table>
    </div>
    )
}

export default ReportBody;