import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        set: (state, action) => {
            const user = action.payload;
            return user;
        },
    }
});

export const actions = user.actions;
export const reducer = user.reducer;

export default user;