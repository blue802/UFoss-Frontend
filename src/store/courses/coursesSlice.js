import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../../utils/API';
import { STATUS } from '../constant';

const initialState = {
  data: [],
  status: STATUS.IDLE,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const res = await axios.get('/api/courses');
    return res.data.courses;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourses.pending]: (state, action) => {
      state.status = STATUS.LOADING;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCEEDED;
      state.data = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.status = STATUS.FAILED;
      state.error = action.error.message;
    },
  },
});

export default coursesSlice.reducer;

export const selectAllCourses = state => state.courses.data;
