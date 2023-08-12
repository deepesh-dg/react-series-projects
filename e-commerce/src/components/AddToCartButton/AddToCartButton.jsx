import { useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import ManageQuantity from "./ManageQuantity";

export function AddToCartButton({ productId, className = "" }) {
    const cart = useSelector((store) => store.cart);

    const inCart = cart.products.findIndex((product) => product.$id === productId) > -1;

    return (
        <div className={className + " grid gap-2"}>
            {inCart ? (
                <ManageQuantity productId={productId.toString()} />
            ) : (
                <AddToCart productId={productId} />
            )}
        </div>
    );
}

export default AddToCartButton;
