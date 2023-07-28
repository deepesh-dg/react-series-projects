import React from "react";
import { prev } from "../store/musicSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";
function PrevBtn() {
    const dispatch = useDispatch();
    return (
        <Button className="" onClick={() => dispatch(prev())}>
            prev
        </Button>
    );
}

export default PrevBtn;
