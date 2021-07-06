import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authHeader } from '../../services/auth.service';
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
    const { data } = await API.get('/categories');

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const res = await API.get(
          `/categories/${data[i].name}/courses?size=15`
        );
        data[i].children = [...res.data?.data];
      }
    }

    return data;
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
