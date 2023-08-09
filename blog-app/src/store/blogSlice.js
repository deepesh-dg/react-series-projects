import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    total: 0,
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlogs: (state, action) => {
            state.blogs.splice(0, 0, ...action.payload);
            state.total += action.payload.length;
        },
        setBlogs: (state, action) => {
            state.blogs = action.payload;
            state.total = action.payload.length;
        },
        updateBlogs: (state, action) => {
            state.blogs = state.blogs.map((blog) => (blog.id === action.payload.id ? action.payload : blog));
        },
        deleteBlogs: (state, action) => {
            const updatedBlogs = state.blogs.filter((blog) => blog.id !== action.payload);
            state.blogs = updatedBlogs;
            state.total = updatedBlogs.length;
        },
    },
});

export const { addBlogs, setBlogs, updateBlogs, deleteBlogs } = blogSlice.actions;

export default blogSlice.reducer;
