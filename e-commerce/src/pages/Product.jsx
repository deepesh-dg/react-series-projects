import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, AddToCartButton } from "../components";
import appwriteService from "../appwrite/config";

export default function Product() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        appwriteService.getProduct(slug).then((product) => {
            if (product) setProduct(product);
            else setProduct(null);
        });
    }, [slug]);

    return (
        <div className="py-8">
            <Container>
                {product && (
                    <div className="flex flex-wrap">
                        <div className="w-5/12 px-2">
                            <img src={appwriteService.getFilePreview(product.image)} alt={product.title} />
                        </div>
                        <div className="w-4/12 px-2">
                            <h1 className="text-3xl font-bold">{product.title}</h1>
                            <hr className="my-4" />
                            <h2 className="font-bold text-2xl">
                                <sup>₹</sup>
                                {product.price}
                            </h2>
                            <p className="text-sm">inclusive of all teaxes</p>
                            <hr className="my-4" />
                            <p>{product.description}</p>
                        </div>
                        <div className="w-3/12 px-2">
                            <div className="border p-4 rounded-xl">
                                <h2 className="font-bold text-2xl mb-2">
                                    <sup>₹</sup>
                                    {product.price}
                                </h2>
                                <p className="mb-4">{product.description}</p>
                                <AddToCartButton productId={product.$id} />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
