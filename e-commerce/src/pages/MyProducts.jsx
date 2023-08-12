import React, { useEffect, useState } from "react";
import { Button, Container, ProductCard } from "../components";
import appwriteService from "../appwrite/config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyProducts() {
    const [products, setProducts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);

    const deleteProduct = async (productId) => {
        const status = await appwriteService.deleteProduct(productId);

        if (status) {
            setProducts((prev) => prev.filter((product) => product.$id !== productId));
        }
    };

    useEffect(() => {
        if (!userData) return;
        appwriteService.getProducts([Query.equal("userId", userData.$id)]).then((data) => {
            if (data) {
                setProducts(data.documents);
            }
        });
    }, [userData]);

    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-wrap gap-y-4">
                    {products.map((product) => (
                        <div key={product.$id} className="w-1/4 px-2">
                            <ProductCard product={product} />
                            <div className="flex gap-4 mt-2">
                                <Link to={product.$id} className="inline-block w-full">
                                    <Button bgColor="bg-green-600" className="w-full">
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-600"
                                    className="w-full"
                                    onClick={() => deleteProduct(product.$id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
