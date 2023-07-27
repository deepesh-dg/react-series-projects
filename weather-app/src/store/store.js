import { configureStore } from "@reduxjs/toolkit";
import weatherInfoSlice from "./weatherInfoSlice";

const store = configureStore({
    reducer: {
        weatherInfo: weatherInfoSlice,
    },
});

export default store;
