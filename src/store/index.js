import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/coursesSlice';

export default configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
