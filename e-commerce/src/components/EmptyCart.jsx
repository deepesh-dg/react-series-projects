import React from "react";
import { useDispatch } from "react-redux";
import { empty } from "../store/cartSlice";
import Button from "./Button";

const EmptyCart = () => {
    const dispatch = useDispatch();

    const emptyCart = () => {
        dispatch(empty());
    };

    return (
        <Button bgColor="bg-red-600" onClick={emptyCart}>
            Empty
        </Button>
    );
};

export default EmptyCart;
