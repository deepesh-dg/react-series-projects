import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { Button, Input } from ".";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {
            const session = await authService.login(formData);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin({ userData }));
                navigate("/");
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div
                className={`mx-auto w-full max-w-lg bg-lightenDar rounded-xl p-10 border border-gray-200 bg-gray-100`}
            >
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={login} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            setValue={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                            label="Email : "
                            placeholder="Email Address"
                            type="email"
                            required
                        />
                        <Input
                            setValue={(value) => setFormData((prev) => ({ ...prev, password: value }))}
                            label="Password : "
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
