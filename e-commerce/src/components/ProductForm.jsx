import React, { useCallback, useState } from "react";
import { Button, Input, Textarea } from ".";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductForm({ product }) {
    const [productData, setProductData] = useState({
        title: product?.title || "",
        price: product?.price || "",
        description: product?.description || "",
        imageFile: null,
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        if (productData.imageFile) {
            const uploadedFile = await appwriteService.uploadFile(productData.imageFile);

            if (uploadedFile) {
                productData.image = uploadedFile.$id;
            }
        }

        if (productData.image && product) {
            appwriteService.deleteFile(product.image);
        }

        if (product) {
            const dbProduct = await appwriteService.updateProduct(product.$id, productData);

            if (dbProduct) {
                navigate(`/product/${dbProduct.$id}`);
            }
        } else {
            const slug = slugTransform(productData.title);
            const dbProduct = await appwriteService.createProduct({
                ...productData,
                slug,
                userId: userData.$id,
            });

            if (dbProduct) {
                navigate(`/product/${dbProduct.$id}`);
            }
        }
    };

    return (
        <form className="flex flex-wrap" onSubmit={submit}>
            <div className="w-2/3 px-2">
                <div className="mb-4">
                    <Input
                        label="Title :"
                        placeholder="Eat That Frog - Brian Tracy"
                        value={productData.title}
                        setValue={(title) => setProductData((prev) => ({ ...prev, title }))}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        label="Price :"
                        placeholder="299"
                        type="number"
                        value={productData.price}
                        setValue={(price) => setProductData((prev) => ({ ...prev, price }))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Textarea
                        label="Description :"
                        placeholder="**THE INTERNATIONAL BESTSELLER**There just isn't enough time for everything on our 'To Do' list - and there never will be. Successful people don't try to do everything."
                        value={productData.description}
                        inputClassName="h-32"
                        setValue={(description) => setProductData((prev) => ({ ...prev, description }))}
                        required
                    />
                </div>
            </div>

            <div className="w-1/3 px-2">
                <div className="mb-4">
                    <Input
                        type="file"
                        label="Product Image :"
                        setValue={(imageFile) => setProductData((prev) => ({ ...prev, imageFile }))}
                        accept="image/png, image/jpg, image/jpeg"
                        required={!product}
                    />
                </div>
                {product?.image && (
                    <div className="mb-4">
                        <img src={appwriteService.getFilePreview(product.image)} alt={product.title} />
                    </div>
                )}
                <Button bgColor={product ? "bg-green-600" : undefined} className="w-full">
                    {product ? "Update" : "Add"}
                </Button>
            </div>
        </form>
    );
}
