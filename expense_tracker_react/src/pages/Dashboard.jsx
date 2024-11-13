import React from "react";
import Header from "../components/Header";
import NavContainer from "../components/NavContainer";
import Boxes from "../components/Boxes";
import ReportHeader from "../components/ReportHeader";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div class="flex main-container">
                <NavContainer/>
                <div class="main">
                    <Boxes/>
                    <div class="report-container">
                        <ReportHeader/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;