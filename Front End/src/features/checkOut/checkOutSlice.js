import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

// this state is made for storing the total amount of the cart prodtucts.

export const checkOutSlice = createSlice({
    name: 'checkOutSlice',
    initialState,
    reducers: {
        increaseAmount: (state, action) => {
            state.value += action.payload;
        },

        decreaseAmount: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { increaseAmount, decreaseAmount } = checkOutSlice.actions;

export default checkOutSlice.reducer;
