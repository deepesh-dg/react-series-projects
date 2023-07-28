import React from "react";
import { play } from "../store/musicSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";

function PlayBtn() {
    const dispatch = useDispatch();
    return (
        <Button className="" onClick={() => dispatch(play())}>
            play
        </Button>
    );
}

export default PlayBtn;
