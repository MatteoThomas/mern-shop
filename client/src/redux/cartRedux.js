import { createSlice } from "@reduxjs/toolkit";

// DETERMINES WHAT WILL BE IN CART STATE
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  // UPDATING STATE THIS WAY ONLY W REDUX TOOLKIT
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
