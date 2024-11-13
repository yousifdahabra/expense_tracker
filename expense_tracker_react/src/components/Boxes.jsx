import React from "react";

const Boxes = () =>{
    return (
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

    )
};

export default Boxes;