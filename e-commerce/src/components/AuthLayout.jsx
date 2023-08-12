import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true, isSeller = false }) {
    const { status: authStatus, userData } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (
            (!authentication && authStatus !== authentication) ||
            (isSeller && userData?.prefs?.role !== "seller")
        ) {
            navigate("/");
        }

        setLoader(false);
    }, [authStatus, navigate, authentication, isSeller, userData]);

    return loader ? null : <>{children}</>;
}
