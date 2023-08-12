import React from "react";
import { Container, Logo } from "..";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./LogoutBtn";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { status: authStatus, userData } = useSelector((state) => state.auth);
    const { total } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Add Product",
            slug: "/add-product",
            active: authStatus && userData && userData?.prefs?.role === "seller",
        },
        {
            name: "My Products",
            slug: "/my-products",
            active: authStatus && userData && userData?.prefs?.role === "seller",
        },
        {
            name: `Cart (${total})`,
            slug: "/cart",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
    ];

    return (
        <header className="py-3 shadow bg-blue-50">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="69px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <Logout />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
