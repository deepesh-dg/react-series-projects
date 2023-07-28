import React from "react";
import { next } from "../store/musicSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";

function NextBtn() {
    const dispatch = useDispatch();
    return (
        <Button className="" onClick={() => dispatch(next())}>
            next
        </Button>
    );
}

export default NextBtn;
