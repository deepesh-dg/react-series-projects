import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import HomeQuizQuestions from "./pages/QuizQuestions";
import QuizQuestions from "./pages/admin/QuizQuestions";

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
                path: "quiz/:quizId",
                element: <HomeQuizQuestions />,
            },
            {
                path: "/admin",
                children: [
                    {
                        path: "",
                        element: <Dashboard />,
                    },
                    {
                        path: "quiz/:quizId",
                        element: <QuizQuestions />,
                    },
                ],
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
