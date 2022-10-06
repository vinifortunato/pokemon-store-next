import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        init: (state, action) => {
            const data = action.payload;
            return data;
        },
        add: (state, action) => {
            const newItem = action.payload;
            return [...state, newItem];
        },
        remove: (state, action) => {
            const target = action.payload;
            const filtered = state.filter((item) => {
                return item.name !== target.name;
            });
            return filtered;
        }
    }
});

export const actions = cart.actions;
export const reducer = cart.reducer;

export default cart;