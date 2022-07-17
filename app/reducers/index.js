import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTION TYPES
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES_SUCCESSFULLY';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';
const UPDATED_QUANTITY = 'UPDATED_QUANTITY';

// ACTION CREATORS
const gotAllCandies = (candies) => ({
  type: GOT_ALL_CANDIES,
  candies,
});

const gotSingleCandy = (candy) => ({
  type: GOT_SINGLE_CANDY,
  candy,
});

const updatedQuantity = (candy) => ({
  type: UPDATED_QUANTITY,
  candy,
});

// THUNK CREATORS
export const getAllCandies = createAsyncThunk(GOT_ALL_CANDIES, async () => {
  const { data } = await axios.get('/api/candies');
  return data;
});

export const getSingleCandy = createAsyncThunk(GOT_SINGLE_CANDY, async (id) => {
  const { data } = await axios.get(`/api/candies/${id}`);
  return data;
});

export const increaseQuantity = createAsyncThunk(
  'increased_quantity',
  async (id) => {
    console.log('increasing');
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

// REDUCER
const initialState = {
  allCandies: [],
  singleCandy: {},
  status: 'idle',
};

// const candyReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GOT_ALL_CANDIES:
//       console.log('got all candies');
//       return { ...state, allCandies: action.candies };
//     case GOT_SINGLE_CANDY:
//       return { ...state, singleCandy: action.candy };
//     case UPDATED_QUANTITY:
//       return { ...state, singleCandy: action.candy };
//     default:
//       return state;
//   }
// };

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
