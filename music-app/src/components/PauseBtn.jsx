import React from "react";
import { pause } from "../store/musicSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";

function PauseBtn() {
    const dispatch = useDispatch();
    return (
        <Button className="" onClick={() => dispatch(pause())}>
            pause
        </Button>
    );
}

export default PauseBtn;
