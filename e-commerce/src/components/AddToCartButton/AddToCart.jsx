import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { Button } from "..";

export function AddToCart({ productId }) {
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(add({ $id: productId, quantity: 1 }))}>Add To Cart</Button>;
}

export default AddToCart;
