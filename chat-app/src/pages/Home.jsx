import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const authStatus = useSelector((status) => status.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus) {
            navigate("/chat");
        } else {
            navigate("/login");
        }
    }, [navigate, authStatus]);

    return <></>;
}
