import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList = [...state.cartList, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartList = [...state.cartList.filter(item => item.id != action.payload.id)];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = state => state.cartList;

export default cartSlice.reducer;
