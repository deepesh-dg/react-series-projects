import React from "react";
import { Outlet } from "react-router-dom";
import store from "./store/store";

// For syncing store to localStorage
store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

function RootLayout() {
    return <Outlet />;
}

export default RootLayout;
