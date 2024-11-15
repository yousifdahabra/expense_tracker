import React, { useState } from "react";
import axios from "axios";

const FormModel = ({isOpen,isClose}) =>{
    const [formData,setFormData] = useState({
        'amount':0,
        'date':'0000-00-00',
        'transaction_type':'expenses',
        'note':'',
    })

    return (
        <div id="form_model" className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="amount">Amount</label>
                    <input 
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            amount:e.target.value
                        })
                    }}
                    type="text"/>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="date">Date</label>
                    <input 
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            date:e.target.value
                        })
                    }}
                    
                    type="date"/>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select Type</label>
                    <select 
                    
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            transaction_type:e.target.value
                        })
                    }}

                    >
                        <option value="incomes">Incomes</option>
                        <option value="expenses">Expenses</option>
                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="note">Note</label>
                    <textarea 
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            note:e.target.value
                        })
                    }}
                    
                    ></textarea>
                </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button onClick={()=>{
                            formData['submit_transaction_form'] = true;
                            formData['transaction_id'] = 0;
                            
                            axios
                            .post("http://localhost/expense_tracker/template/server/functions.php",formData)
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((error) => { 
                                console.log(error)

                             });
                    
                    }} 
                    className="view" type="button">Submit</button>
                    <button onClick={isClose} id="close_form_model" className="view" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default FormModel;