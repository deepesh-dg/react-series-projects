import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../store/cartSlice";
import Button from "./Button";

export function ManageQuantity({ productId }) {
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const { quantity } = cart.products.filter((product) => product.$id === productId)[0];

    return (
        <div className="flex justify-between items-center">
            <Button onClick={() => dispatch(changeQuantity({ $id: productId, quantity: quantity - 1 }))}>
                -
            </Button>
            <div className="mx-3">{quantity}</div>
            <Button onClick={() => dispatch(changeQuantity({ $id: productId, quantity: quantity + 1 }))}>
                +
            </Button>
        </div>
    );
}

export default ManageQuantity;
