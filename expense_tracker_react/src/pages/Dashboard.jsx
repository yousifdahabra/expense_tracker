import React, { useState } from "react";
import Header from "../components/Header";
import NavContainer from "../components/NavContainer";
import Boxes from "../components/Boxes";
import ReportHeader from "../components/ReportHeader";
import ReportBody from "../components/ReportBody";
import FormModel from "../components/FormModel";
import DeleteModel from "../components/DeleteModel";

const Dashboard = () => {

    const [isOpenAdd, setisOpenAdd] = useState(false);

    const triggerAddForm = () =>{
        setisOpenAdd((isOpenAdd)=> !isOpenAdd)
    }
    const triggerCloseForm = () =>{
        setisOpenAdd(false)
    }

    return (
        <>
            <Header/>
            <div className="flex main-container">
                <NavContainer/>
                <div className="main">
                    <Boxes/>
                    <div className="report-container">
                        <ReportHeader triggerAdd={triggerAddForm} />
                        <ReportBody  />
                    </div>
                </div>
            </div>
            <FormModel isOpen={isOpenAdd} isClose={triggerCloseForm} />
            <DeleteModel/>
        </>
    );
}

export default Dashboard;