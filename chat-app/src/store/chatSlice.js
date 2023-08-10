import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setMsg: (state, action) => {
            state.splice(0, state.length, ...action.payload);
        },
        addMsg: (state, action) => {
            state.push(action.payload);
        },
        editMsg: (state, action) => {
            const newMsgs = state.map((msg) => (msg.$id === action.payload.$id ? action.payload : msg));
            state.splice(0, state.length, ...newMsgs);
        },
        deleteMsg: (state, action) => {
            const newMsgs = state.filter((msg) => msg.$id !== action.payload);
            state.splice(0, state.length, ...newMsgs);
        },
        reset: (state, action) => {
            state = initialState;
        },
    },
});

export const { addMsg, editMsg, deleteMsg, setMsg, reset } = chatSlice.actions;

export default chatSlice.reducer;
