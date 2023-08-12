import React, { useEffect, useState } from "react";
import { Container, ProductCard } from "../components";
import appwriteService from "../appwrite/config";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        appwriteService.getProducts().then((data) => {
            if (data) {
                setProducts(data.documents);
            }
        });
    }, []);

    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-wrap gap-y-4">
                    {products.map((product) => (
                        <div key={product.$id} className="w-1/4 px-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
