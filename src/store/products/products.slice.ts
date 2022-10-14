import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "./products.types";

const initialState: ProductsState = {
  next: null,
  previous: null,
  list: []
}

const init: CaseReducer<ProductsState, PayloadAction<ProductsState>> = (state, action) => {
  return action.payload;
}

const update: CaseReducer<ProductsState, PayloadAction<ProductsState>> = (state, action) => {
  const newData = action.payload;
  return {
    next: newData.next,
    previous: newData.previous,
    list: [...state.list, ...newData.list]
  }
}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        init,
        update
    }
});

export const actions = products.actions;
export const reducer = products.reducer;

export default products;
