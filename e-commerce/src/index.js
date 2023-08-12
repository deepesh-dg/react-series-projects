import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import MyProducts from "./pages/MyProducts";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import Cart from "./pages/Cart";
import { AuthLayout } from "./components";

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
                path: "/product/:slug",
                element: <Product />,
            },
            {
                path: "/cart",
                element: (
                    <AuthLayout authentication>
                        <Cart />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-product",
                element: (
                    <AuthLayout authentication isSeller>
                        <AddProduct />
                    </AuthLayout>
                ),
            },
            {
                path: "/my-products",
                element: (
                    <AuthLayout authentication isSeller>
                        <MyProducts />
                    </AuthLayout>
                ),
            },
            {
                path: "/my-products/:slug",
                element: (
                    <AuthLayout authentication isSeller>
                        <EditProduct />
                    </AuthLayout>
                ),
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
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
