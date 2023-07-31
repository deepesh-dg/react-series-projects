import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../store/musicSlice";
import formatDuration from "../helpers/formatDuration";

function MusicItem({ musicInfo }) {
    const currentPlaying = useSelector((state) => state.music.current);
    const dispatch = useDispatch();

    const isPlaying = currentPlaying && currentPlaying.id === musicInfo.id;

    const playOnClick = () => {
        dispatch(current(musicInfo.id));
    };

    return (
        <div className="group flex -mx-2 cursor-pointer" onClick={playOnClick}>
            <div className="w-full max-w-[185px] shrink-0 px-2">
                <div className="flex relative overflow-hidden rounded-lg">
                    <img src={musicInfo.thumbnail} alt={musicInfo.name} />
                    <div
                        className={`absolute inset-0 bg-black/50 text-white flex justify-center items-center duration-200 ${
                            isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                        {isPlaying ? "Playing..." : ""}
                    </div>
                </div>
            </div>
            <div className="w-full px-2 pt-1">
                <h3>{musicInfo.name}</h3>
                <div className="flex gap-x-3 text-gray-600">
                    <span className="inline-block">{musicInfo.singer}</span>
                    <span className="inline-block">&middot;</span>
                    <span className="inline-block">{formatDuration(musicInfo.duration)}</span>
                </div>
            </div>
        </div>
    );
}

export default MusicItem;
