import React from "react";


const DeleteModel = () =>{
    return  (
    <div id="delete_form_model" className="modal hidden">
        <div className="modal-content">
            <div className=" form align-items-center flex flex-direction-column ">
                <input id="delete_id" type="hidden" value="0"/>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <h2>Are you sure?</h2>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="close_delete_form_btn" className="view" type="button">Close</button>
                    <button id="submit_delete_form" className="view" type="button">Submit</button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default DeleteModel;