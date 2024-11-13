import React from "react";
import Header from "../components/Header";
import NavContainer from "../components/NavContainer";
import Boxes from "../components/Boxes";
import ReportHeader from "../components/ReportHeader";
import ReportBody from "../components/ReportBody";
import FormModel from "../components/FormModel";
import DeleteModel from "../components/DeleteModel";

const Dashboard = () => {
    return (
        <>
            <Header/>
            <div className="flex main-container">
                <NavContainer/>
                <div className="main">
                    <Boxes/>
                    <div className="report-container">
                        <ReportHeader/>
                        <ReportBody/>
                    </div>
                </div>
            </div>
            <FormModel/>
            <DeleteModel/>
        </>
    );
}

export default Dashboard;