import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// THUNK CREATORS
export const getAllCandies = createAsyncThunk('candies/getAll', async () => {
  try {
    const { data } = await axios.get('/api/candies');
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getSingleCandy = createAsyncThunk(
  'candies/getSingleCandy',
  async (id) => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const increaseQuantity = createAsyncThunk(
  'candies/increment',
  async (id) => {
    try {
      const { data } = await axios.put(`/api/candies/${id}/increase`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const decreaseQuantity = createAsyncThunk(
  'candies/decrement',
  async (id) => {
    try {
      const { data } = await axios.put(`/api/candies/${id}/decrease`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

// SLICE
const initialState = {
  allCandies: [],
  singleCandy: {},
  status: 'idle',
  error: null,
};

export const candySlice = createSlice({
  name: 'candies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCandies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCandies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCandies = action.payload;
      })
      .addCase(getAllCandies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getSingleCandy.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.singleCandy = action.payload;
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.singleCandy = action.payload;
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.singleCandy = action.payload;
      });
  },
});

export default candySlice.reducer;
