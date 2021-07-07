import { createSlice } from '@reduxjs/toolkit';

const cartInLocalStorage = JSON.parse(localStorage.getItem('carts'));

const initialState = cartInLocalStorage ? cartInLocalStorage : [];

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      localStorage.setItem('carts', JSON.stringify(state));
    },
    removeItemCart(state, action) {
      const cartRemove = action.payload;
      state = state.filter(cart => cart.id !== cartRemove.id);
      localStorage.setItem('carts', JSON.stringify(state));
      return state;
    },
    removeAllCart(state, action) {
      state = action.payload;
      localStorage.setItem('carts', JSON.stringify(state));
      return state;
    },
  },
});

export const { addToCart, removeItemCart, removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;
