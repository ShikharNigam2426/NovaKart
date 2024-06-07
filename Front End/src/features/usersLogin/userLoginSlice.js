import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: -1,
}

export const userLoginslice = createSlice({
    name: 'userLoginslice',
    initialState,
    reducers: {
        Login: (state, action) => {
            state.value = action.payload;
        },

        LogOut: (state, action) => {
            state.value = -1;
        },
    },
})

export const { Login, LogOut } = userLoginslice.actions;

export default userLoginslice.reducer;