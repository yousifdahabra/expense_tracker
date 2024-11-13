import React from "react";

const NavContainer = () => {
    return (
    <div class="nav-container">
        <nav class="flex flex-direction-column justify-content-space-between second-background-color nav">
        <div class="nav-options">
                <a href="#" class="nav-option active">
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    <h3> Dashboard</h3>
                </a>
                <a id="logout_btn" href="#" class="nav-option ">
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    <h3>Logout</h3>
                </a>

            </div>
        </nav>
    </div>

    );
}

export default NavContainer;