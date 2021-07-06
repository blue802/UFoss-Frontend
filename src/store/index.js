import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import coursesReducer from './courses/coursesSlice';

export default configureStore({
  reducer: {
    courses: coursesReducer,
    categories: categoriesReducer,
  },
});
