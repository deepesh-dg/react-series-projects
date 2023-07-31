import React from "react";
import { useSelector } from "react-redux";
import MusicItem from "./MusicItem";

function MusicList() {
    const musicList = useSelector((state) => state.music.musicList);

    return (
        <div className="w-full">
            <h2 className="font-bold text-2xl mb-2 pl-1">Songs</h2>
            <ul>
                {musicList.map((musicItem) => (
                    <li key={musicItem.id} className="py-2 border-b border-gray-300 last:border-none">
                        <MusicItem musicInfo={musicItem} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MusicList;
