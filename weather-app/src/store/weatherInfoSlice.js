import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coordinates: JSON.parse(localStorage.getItem("coordinates")) || {
        name: "Delhi",
        latitude: 28.65195,
        longitude: 77.23149,
    },
};

const weatherInfoSlice = createSlice({
    name: "weatherInfo",
    initialState,
    reducers: {
        setCoordinates(state, action) {
            state.coordinates.name = action.payload.name;
            state.coordinates.latitude = action.payload.latitude;
            state.coordinates.longitude = action.payload.longitude;
        },
    },
});

export const { setWeatherInfo, setCoordinates } = weatherInfoSlice.actions;

export default weatherInfoSlice.reducer;
