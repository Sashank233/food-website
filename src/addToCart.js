import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(
                item => item.name === action.payload.name
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const finalObj = { ...action.payload, quantity: 1 };
                state.push(finalObj);
            }
        },

        removeCart: (state, action) => {
            const index = state.findIndex(
                item => item.name === action.payload.name
            );

            if (index !== -1) 
            {
                state.splice(index, 1);
            }
          
        },
    
    incrementQty: (state, action) => {
      const item = state.find(
        i => i.name === action.payload.name
      );
      if (item)
     {
        item.quantity += 1;
      }

    },
     decrementQty: (state, action) => 
    {
      const item = state.find(
        i => i.name === action.payload.name
      );

      if (item) 
    {
        if (item.quantity > 1) 
            {
          item.quantity -= 1;
        }
        else 
            {
          // remove item if quantity becomes 0
          return state.filter(i => i.name !== item.name);
        }
    }
},
clearCart: ()=>[]
}
});

export const { addToCart, removeCart, incrementQty, decrementQty,clearCart } = cartSlice.actions;
export default cartSlice.reducer;