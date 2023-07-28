import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setVolume,
    setCurrentTime,
    play as playMusic,
    pause as pauseMusic,
    mute as muteMusic,
    unmute as unmuteMusic,
} from "../store/musicSlice";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import PlayBtn from "./PlayBtn";
import PauseBtn from "./PauseBtn";
import PlayingBar from "./PlayingBar";
import VolumeBar from "./VolumeBar";
import ToggleMute from "./ToggleMute";

function MusicPlayer() {
    const { current, volume, mute, play, currentDuration } = useSelector((state) => state.music);

    const dispatch = useDispatch();

    const [audioElement, setAutioElement] = useState(null);

    useEffect(() => {
        if (current) {
            setAutioElement((prev) => {
                if (prev) {
                    prev.pause();
                    prev.currentTime = 0;
                    // By doing only this with removing every event listener will result browser allow to delete old audio object from memory. garbadge collector will automatically cleanup old unused audio object from memory.
                }

                return new Audio(current.url);
            });
        } else setAutioElement(null);
    }, [current]);

    useEffect(() => {
        if (audioElement) {
            audioElement.volume = volume / 100;
            audioElement.muted = mute;
            if (play)
                audioElement.play().catch((e) => {
                    // Throws error when music completes and we either click on prev or next.
                    console.log(e);
                });
            else audioElement.pause();
        }
    }, [volume, mute, play, audioElement]);

    useEffect(() => {
        if (audioElement) {
            audioElement.currentTime = currentDuration;
        }
    }, [currentDuration, audioElement]);

    useEffect(() => {
        const handleVolumeEvent = (e) => {
            dispatch(setVolume(e.currentTarget.volume * 100));
            dispatch(e.currentTarget.muted ? muteMusic() : unmuteMusic());
        };

        const handleTimeUpdate = (e) => dispatch(setCurrentTime(Number(e.currentTarget.currentTime)));
        const handlePlay = (e) => dispatch(playMusic());
        const handlePause = (e) => dispatch(pauseMusic());

        audioElement?.addEventListener("volumechange", handleVolumeEvent);
        audioElement?.addEventListener("timeupdate", handleTimeUpdate);
        audioElement?.addEventListener("play", handlePlay);
        audioElement?.addEventListener("pause", handlePause);

        return () => {
            audioElement?.removeEventListener("volumechange", handleVolumeEvent);
            audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
            audioElement?.removeEventListener("play", handlePlay);
            audioElement?.removeEventListener("pause", handlePause);
        };
    }, [audioElement, dispatch]);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-x-4">
                <div className="w-full">
                    <PlayingBar />
                </div>
                <PrevBtn />
                {play ? <PauseBtn /> : <PlayBtn />}
                <NextBtn />
                <VolumeBar />
                <ToggleMute />
            </div>
        </div>
    );
}

export default MusicPlayer;
