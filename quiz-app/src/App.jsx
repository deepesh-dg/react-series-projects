import React from "react";
import { Outlet } from "react-router-dom";
import store from "./store/store";

// For syncing store to localStorage
store.subscribe(() => {
    localStorage.setItem("quizes", JSON.stringify(store.getState().quizes));
});

function App() {
    return (
        <div className="relative p-4">
            <Outlet />
        </div>
    );
}

export default App;
