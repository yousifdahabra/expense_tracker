import React from "react";

const Boxes = () =>{
    return (
        <div className="flex justify-content-evenly align-items-center justify-content-space-around flex-wrap box-container ">
        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2 id="incomes" className="topic-heading ">0</h2>
                <h2 className="topic-title">Incomes</h2>
            </div>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </div>

        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2 id="expenses" className="topic-heading">0</h2>
                <h2 className="topic-title">Expenses</h2>
            </div>
            <i className="fa fa-minus" aria-hidden="true"></i>
        </div>

        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2 id="balance" className="topic-heading">0</h2>
                <h2 className="topic-title">Balance</h2>
            </div>
            <i className="fa fa-balance-scale" aria-hidden="true"></i>
        </div>
    </div>

    )
};

export default Boxes;