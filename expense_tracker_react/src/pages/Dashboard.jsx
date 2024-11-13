import React from "react";
import Header from "../components/Header";
import NavContainer from "../components/NavContainer";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div class="flex main-container">
                <NavContainer/>
                <div class="main">
                </div>
            </div>
        </div>
    );
}

export default Dashboard;