import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import { setVolume } from "../store/musicSlice";

function VolumeBar() {
    const { volume } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-x-2">
            <ProgressBar value={volume} maxValue={100} setValue={(v) => dispatch(setVolume(v))} />
            <span className="inline-block shrink-0">{volume}</span>
        </div>
    );
}

export default VolumeBar;
