import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: {
        next: null,
        previous: null,
        list: []
    },
    reducers: {
        init: (state, action) => {
            return action.payload;
        },
        update: (state, action) => {
            const newData = action.payload;
            return {
                next: newData.next,
                previous: newData.previous,
                list: [...state.list, ...newData.list]
            }
        }
    }
});

export const actions = products.actions;
export const reducer = products.reducer;

export default products;