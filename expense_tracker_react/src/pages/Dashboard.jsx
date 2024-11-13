import React from "react";
import Header from "../components/Header";
import NavContainer from "../components/NavContainer";
import Boxes from "../components/Boxes";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div class="flex main-container">
                <NavContainer/>
                <div class="main">
                    <Boxes/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;