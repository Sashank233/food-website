import reducer from "./addToCart";
import { createSlice } from "@reduxjs/toolkit";
import { coupons } from "./coupon";


const couponSlice = createSlice({
    name: 'coupon',
    initialState: {
        code:" ",
        discount:0,
        applied:false,
        message:" ",
    },
    reducers:{
        applyCoupon:(state,action)=>{
            const enterCode = action.payload.toUpperCase();
            if(coupons[enterCode])
            {
                state.code = enterCode;
                state.discount = coupons[enterCode];
                state.applied = true;
                state.message = `Coupon "${enterCode}" applied successfully! you got "${coupons[enterCode]}%" discount.`;
            }
            else
            {
                state.message = "Invalid coupon code. Please try again.";
            }
        },
    
    resetCoupon:(state)=>
    {
        state.code = " ";
        state.discount = 0;
        state.applied = false;
        state.message = " ";
    }
}
});

export const {applyCoupon, resetCoupon} = couponSlice.actions;
export default couponSlice.reducer;