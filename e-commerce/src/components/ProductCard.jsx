import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { AddToCartButton } from ".";

export default function ProductCard({ product }) {
    return (
        <div className="w-full rounded-lg p-4 bg-gray-100 duration-200 hover:shadow-md">
            <div className="mb-2">
                <Link to={`/product/${product.$id}`}>
                    <div className="w-full pt-[133.33%] relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0 flex justify-center items-center bg-white">
                            <img
                                src={appwriteService.getFilePreview(product.image)}
                                alt={product.title}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <Link to={`/product/${product.$id}`}>
                <h2 className="font-bold text-xl mb-2">{product.title}</h2>
            </Link>
            <AddToCartButton productId={product.$id} />
        </div>
    );
}
