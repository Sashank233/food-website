import { createSlice } from "@reduxjs/toolkit";

let OderSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        addOrder: (state, action) => {
            state.push(action.payload);
        },
        clearOrder: () => {
            return [];
        }
    }
});

export const { addOrder, clearOrder } = OderSlice.actions;
export default OderSlice.reducer;