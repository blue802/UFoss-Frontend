import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import coursesReducer from './courses/coursesSlice';
import cartReducer from './cart/cartSlice'

export default configureStore({
  reducer: {
    courses: coursesReducer,
    categories: categoriesReducer,
    carts: cartReducer
  },
});
