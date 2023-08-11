import authService from "../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../store/authSlice";
import { Button, Input } from ".";
import { useDispatch } from "react-redux";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const create = async (e) => {
        e.preventDefault();

        try {
            const userData = await authService.createAccount(formData);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login({ userData }));
                navigate("/");
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className={`mx-auto w-full max-w-lg bg-lightenDark rounded-xl p-10 border border-gray-200 bg-gray-100`}
            >
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={create} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            setValue={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                            label="Full Name : "
                            placeholder="Full Name"
                            required
                        />
                        <Input
                            setValue={(value) => setFormData((prev) => ({ ...prev, username: value }))}
                            label="Username : "
                            placeholder="Username"
                            type="text"
                            required
                        />
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
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
