import React from "react";

const FormModel = ({openAddForm}) =>{
    return (
        <div id="form_model" className={`moda ${openAddForm ? "":"hidden"}`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="amount">Amount</label>
                    <input id="amount" type="text"/>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="date">Date</label>
                    <input id="date" type="date"/>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select Type</label>
                    <select id="transaction_type">
                        <option value="incomes">Incomes</option>
                        <option value="expenses">Expenses</option>
                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="date">Note</label>
                    <textarea id="note"></textarea>
                </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="submit_form" className="view" type="button">Submit</button>
                    <button id="close_form_model" className="view" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default FormModel;