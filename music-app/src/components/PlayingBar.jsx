import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import { setCurrentDuration } from "../store/musicSlice";
import formatDuration from "../helpers/formatDuration";

function PlayingBar() {
    const { currentTime, current } = useSelector((state) => state.music);

    const dispatch = useDispatch();

    return (
        current && (
            <div className="flex gap-x-2">
                <span className="inline-block shrink-0">{formatDuration(currentTime)}</span>
                <ProgressBar
                    value={currentTime}
                    setValue={(e) => dispatch(setCurrentDuration(e))}
                    maxValue={current.duration}
                />
                <span className="inline-block shrink-0">{formatDuration(current.duration)}</span>
            </div>
        )
    );
}

export default PlayingBar;
