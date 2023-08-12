import React from "react";
import appwriteService from "../appwrite/config";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="w-full rounded-lg p-4 bg-gray-100">
            <div className="mb-2">
                <Link to={`/product/${product.$id}`}>
                    <img
                        src={appwriteService.getFilePreview(product.image)}
                        alt={product.title}
                        className="rounded-lg"
                    />
                </Link>
            </div>
            <Link to={`/product/${product.$id}`}>
                <h2 className="font-bold text-xl mb-2">{product.title}</h2>
            </Link>
            <AddToCartButton productId={product.$id} />
        </div>
    );
}
