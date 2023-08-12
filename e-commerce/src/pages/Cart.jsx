import React, { useEffect, useState } from "react";
import { Button, CartItem, Container, EmptyCart } from "../components";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [products, setProducts] = useState([]);
    const subTotalAmount = products
        .map((product) => {
            const cartProduct = cart.products.filter((p) => product.$id === p.$id)[0];

            const quantity = cartProduct ? cartProduct.quantity : 0;
            const price = product.price;

            return price * quantity;
        })
        .reduce((prev, next) => prev + next, 0)
        .toFixed(2);

    useEffect(() => {
        const getProducts = async () => {
            const promises = [];

            cart.products.forEach((product) => promises.push(appwriteService.getProduct(product.$id)));

            try {
                setProducts(await Promise.all(promises));
            } catch (e) {
                console.log(e);
            }
        };

        getProducts();
    }, [cart]);

    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-wrap">
                    <div className="w-2/3 px-2">
                        <div className="bg-white pt-4 pl-5 pr-7 rounded-xl">
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                                <span>
                                    <EmptyCart />
                                </span>
                            </div>
                            <hr className="my-4" />
                            {products.map((product) => (
                                <div className="item" key={product.$id}>
                                    <CartItem product={product} />
                                    <hr className="my-4" />
                                </div>
                            ))}
                            <div className="text-right" style={{ fontSize: "125%" }}>
                                Subtotal ({cart.total} {cart.total > 1 ? "items" : "item"}):&nbsp;
                                <span className="font-bold inline-flex justify-end items-center">
                                    <small style={{ fontSize: "70%" }}>₹</small>
                                    {subTotalAmount}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="bg-white pt-4 pl-5 pr-7 rounded-xl">
                            <div style={{ fontSize: "125%" }} className="mb-3">
                                Subtotal ({cart.total} {cart.total > 1 ? "items" : "item"}):&nbsp;
                                <span className="font-bold inline-flex justify-end items-center">
                                    <small style={{ fontSize: "70%" }}>₹</small>
                                    {subTotalAmount}
                                </span>
                            </div>
                            <div className="grid gap-2">
                                <Button disabled={products.length === 0}>Proceed to Buy</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;
