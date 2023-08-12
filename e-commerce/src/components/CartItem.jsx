import React from "react";
import { Link } from "react-router-dom";
import { AddToCartButton } from ".";
import DeleteItem from "./DeleteItem";
import appwriteService from "../appwrite/config";

export const CartItem = ({ product }) => {
    return (
        <div className="flex flex-wrap">
            <div className="w-3/12 px-2">
                <Link to={"/product/" + product.$id}>
                    <img src={appwriteService.getFilePreview(product.image)} alt={product.title} />
                </Link>
            </div>
            <div className="w-7/12 px-2">
                <div className="flex flex-wrap content-between h-full min-h-[75px]">
                    <Link to={"/product/" + product.$id} className="inline-block w-full">
                        <h6 className="">{product.title}</h6>
                    </Link>
                    <div className="flex justify-between w-full">
                        <div style={{ width: "150px" }}>
                            <AddToCartButton productId={product.$id.toString()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/12 px-2">
                <div className="flex flex-wrap h-full justify-end items-center content-between">
                    <div className="font-bold flex justify-end items-center w-full">
                        <small>₹</small>
                        <span className="text-xl">{product.price.toFixed(2)}</span>
                    </div>
                    <DeleteItem productId={product.$id.toString()} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
