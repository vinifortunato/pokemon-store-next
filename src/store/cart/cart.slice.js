import { createSlice, current } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        init: (state, action) => {
            const data = action.payload;
            return data;
        },
        add: (state, action) => {
            const newItem = { ...action.payload };
            const list = [...current(state)];
            const index = list.findIndex((element) => {
                return element.name === newItem.name;
            });
            const itemExists = index > -1;
            if (!itemExists) {
                newItem.amount = 1;
                return [...state, newItem];
            }
            list[index] = { ...list[index], amount: list[index].amount + 1 };
            return list;
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