import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: null,
    prev: null,
    next: null,
    volume: 100,
    mute: false,
    play: false,
    currentDuration: 0,
    currentTime: 0,
    musicList: [
        {
            id: 1,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/DbiRVNeZPnw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAqoTTjnCJ_qVapz8yhD0NyTOm8XQ",
            url: "/music-1.mp3",
        },
        {
            id: 2,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCk4tL1H9S-dHGFIvlcXuE1anC_ow",
            url: "/music-1.mp3",
        },
        {
            id: 3,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 4,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 5,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 6,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 7,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 8,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 9,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
        {
            id: 10,
            name: "Pyaar Hota Kayi Baar Hai",
            duration: 208,
            singer: "Pritan, Arijit, Amitabh",
            thumbnail:
                "https://i.ytimg.com/vi/aYLJnasivzI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMgEvOvnWSpsYd-pCHobCioeCmjw",
            url: "/music-1.mp3",
        },
    ],
};

function currentReducer(state, action) {
    const music = state.musicList.filter((musicFromList) => musicFromList.id === action.payload)[0];

    if (music) {
        const currIndex = state.musicList.findIndex((musicFromList) => music.id === musicFromList.id);
        const prev = currIndex > 0 ? state.musicList[currIndex - 1].id : null;
        const next = currIndex < state.musicList.length - 1 ? state.musicList[currIndex + 1].id : null;

        state.current = music;
        state.prev = prev;
        state.next = next;
        state.currentDuration = 0;
        state.play = true;
    } else state.current = null;
}

const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        add(state, action) {
            if (Array.isArray(action.payload)) state.musicList.push(...action.payload);
            else state.musicList.push(action.payload);
        },
        set(state, action) {
            state.musicList = action.payload;
        },
        current: currentReducer,
        prev(state) {
            if (state.prev !== null) currentReducer(state, { payload: state.prev });
        },
        next(state) {
            if (state.next !== null) currentReducer(state, { payload: state.next });
        },
        play(state) {
            if (state.current) state.play = true;
        },
        pause(state) {
            if (state.current) state.play = false;
        },
        togglePlay(state) {
            state.play = !state.play;
        },
        mute(state) {
            state.mute = true;
        },
        unmute(state) {
            state.mute = false;
        },
        toggleMute(state) {
            state.mute = !state.mute;
        },
        setVolume(state, action) {
            state.volume = action.payload;
        },
        setCurrentDuration(state, action) {
            state.currentDuration = state.current ? action.payload : state.currentDuration;
        },
        setCurrentTime(state, action) {
            state.currentTime = state.current ? action.payload : state.currentTime;
        },
    },
});

export const {
    add,
    set,
    current,
    prev,
    next,
    play,
    pause,
    togglePlay,
    mute,
    unmute,
    toggleMute,
    setVolume,
    setCurrentDuration,
    setCurrentTime,
} = musicSlice.actions;

export default musicSlice.reducer;
