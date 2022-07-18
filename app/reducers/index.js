import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// THUNK CREATORS
export const getAllCandies = createAsyncThunk('get candies', async () => {
  const { data } = await axios.get('/api/candies');
  return data;
});

export const getSingleCandy = createAsyncThunk(
  'get single candy',
  async (id) => {
    const { data } = await axios.get(`/api/candies/${id}`);
    return data;
  }
);

export const increaseQuantity = createAsyncThunk(
  'increased_quantity',
  async (id) => {
    const { data } = await axios.put(`/api/candies/${id}/increase`);
    return data;
  }
);

export const decreaseQuantity = createAsyncThunk(
  'decreased_quantity',
  async (id) => {
    const { data } = await axios.put(`/api/candies/${id}/decrease`);
    return data;
  }
);

// SLICE
const initialState = {
  allCandies: [],
  singleCandy: {},
  status: 'idle',
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
      .addCase(getAllCandies.rejected, (state) => {
        state.status = 'failed';
        console.error('failed to get candies');
      })
      .addCase(getSingleCandy.fulfilled, (state, action) => {
        state.singleCandy = action.payload;
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        state.singleCandy = action.payload;
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.singleCandy = action.payload;
      });
  },
});

export default candySlice.reducer;
