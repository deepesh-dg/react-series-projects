import React from "react";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div className="relative p-4">
            <Outlet />
        </div>
    );
}

export default Admin;
