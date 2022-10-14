import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/Common.types";
import { UserState } from "./user.types";

const initialState = null as UserState;

const set: CaseReducer<UserState, PayloadAction<User | null>> = (state, action) => {
  return action.payload;
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set,
  }
});

export const actions = user.actions;
export const reducer = user.reducer;

export default user;
