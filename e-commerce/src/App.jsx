import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/";
import store from "./store/store";

// For syncing store to localStorage
store.subscribe(() => {
    localStorage.setItem("auth", JSON.stringify(store.getState().auth));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <div className="w-full block">
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
