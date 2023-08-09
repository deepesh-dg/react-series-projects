import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMsg: (state, action) => {
            state.push(action.payload);
        },
        editMsg: (state, action) => {
            state = state.map((msg) => (msg.$id === action.payload.$id ? action.payload : msg));
        },
        deleteMsg: (state, action) => {
            state = state.filter((msg) => msg.$id !== action.payload);
        },
        setChat: (state, action) => {
            state = action.payload;
        },
        reset: (state, action) => {
            state = initialState;
        },
    },
});

export const { addMsg, editMsg, deleteMsg, setChat, reset } = chatSlice.actions;

export default chatSlice.reducer;
