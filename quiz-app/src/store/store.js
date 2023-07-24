import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

const store = configureStore({
    reducer: {
        quizes: quizSlice,
    },
});

export default store;
