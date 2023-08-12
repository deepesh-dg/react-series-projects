import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem("cart")) || {
    products: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        add: (cart, action) => {
            const cartItemIndex = cart.products.findIndex((product) => product.$id === action.payload.$id);

            if (cartItemIndex > -1) cart.products[cartItemIndex].quantity += action.payload.quantity;
            else cart.products.push(action.payload);

            cart.total += action.payload.quantity;
        },
        remove: (cart, action) => {
            cart.total -= cart.products.filter((product) => product.$id === action.payload)[0].quantity;
            cart.products = cart.products.filter((product) => product.$id !== action.payload);
        },
        empty: (cart) => {
            cart.products = [];
            cart.total = 0;
        },
        changeQuantity: (cart, action) => {
            let products;

            if (action.payload.quantity === 0)
                products = cart.products.filter((product) => product.$id !== action.payload.$id);
            else
                products = cart.products.map((product) => {
                    if (product.$id === action.payload.$id) return action.payload;
                    return product;
                });

            cart.total +=
                action.payload.quantity -
                cart.products.filter((product) => product.$id === action.payload.$id)[0].quantity;
            cart.products = products;
        },
    },
});

export const { add, remove, empty, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
