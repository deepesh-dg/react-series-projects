import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleMute } from "../store/musicSlice";

function ToggleMute() {
    const { mute } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    return <Button onClick={() => dispatch(toggleMute())}>{mute ? "unmute" : "mute"}</Button>;
}

export default ToggleMute;
