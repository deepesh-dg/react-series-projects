import React from "react";
import { Outlet } from "react-router-dom";
import store from "./store/store";

// For syncing store to localStorage
store.subscribe(() => {
    localStorage.setItem("quizes", JSON.stringify(store.getState().quizes));
});

function RootLayout() {
    return <Outlet />;
}

export default RootLayout;
