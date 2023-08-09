import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedLayout() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authStatus) navigate("/login");
    }, [authStatus, navigate]);

    return <Outlet />;
}
