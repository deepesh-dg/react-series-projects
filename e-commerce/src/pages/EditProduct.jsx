import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, ProductForm } from "../components";
import appwriteService from "../appwrite/config";

export default function EditProduct() {
    const { slug } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        appwriteService.getProduct(slug).then((product) => {
            if (product) setProduct(product);
            else setProduct(null);
        });
    }, [slug]);

    return (
        <div className="py-8">
            <Container>{product && <ProductForm product={product} />}</Container>
        </div>
    );
}
