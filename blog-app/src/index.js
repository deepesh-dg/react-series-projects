import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store";
import App from "./App";
import Home from "./pages/Home";
import AuthLayout from "./pages/(auth)/AuthLayout";
import ProtectedLayout from "./pages/(protected)/ProtectedLayout";
import AddPost from "./pages/(protected)/AddPost";
import Login from "./pages/(auth)/Login";
import Signup from "./pages/(auth)/Signup";
import Post from "./pages/Post";
import EditPost from "./pages/(protected)/EditPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />,
                    },
                ],
            },
            {
                path: "/signup",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <Signup />,
                    },
                ],
            },
            {
                path: "/add-post",
                element: <ProtectedLayout />,
                children: [
                    {
                        path: "",
                        element: <AddPost />,
                    },
                ],
            },
            {
                path: "/edit-post/:slug",
                element: <ProtectedLayout />,
                children: [
                    {
                        path: "",
                        element: <EditPost />,
                    },
                ],
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
