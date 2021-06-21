import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../constant';

const initialState = {
  posts: [],
  status: STATUS.IDLE,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.posts = action.payload;
    },
  },
});
