import { CaseReducer, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../types/Common.types";
import { CartState } from "./cart.types";

const initialState: CartState = [];

const init: CaseReducer<CartState, PayloadAction<CartState>> = (state, action) => {
  return action.payload;
}

const add: CaseReducer<CartState, PayloadAction<Pokemon>> = (state, action) => {
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
}

const remove: CaseReducer<CartState, PayloadAction<Pokemon>> = (state, action) => {
  const target = action.payload;
  const filtered = state.filter((item) => {
    return item.name !== target.name;
  });
  return filtered;
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        init,
        add,
        remove,
    }
});

export const actions = cart.actions;
export const reducer = cart.reducer;

export default cart;
