import React from "react";
import { useSelector } from "react-redux";
import MusicItem from "./MusicItem";

function MusicList() {
    const musicList = useSelector((state) => state.music.musicList);

    return (
        <div className="bg-black/70 rounded-xl py-6 px-4 text-white h-full overflow-auto">
            <h2 className="font-bold text-2xl">Songs</h2>
            <ul>
                {musicList.map((musicItem) => (
                    <li key={musicItem.id} className="py-2 border-b border-white/20 last:border-none">
                        <MusicItem musicInfo={musicItem} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MusicList;
