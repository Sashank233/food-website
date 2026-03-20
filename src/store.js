import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addToCart";
import couponReducer from "./couponSlice";
import oderReducer from "./OderSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer, 
    coupon: couponReducer,
    order: oderReducer,
  },
});
export default store;