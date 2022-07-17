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
  console.log('GETTING ALL CANDIES');
  const { data } = await axios.get('/api/candies');
  console.log('data', data);
  return data;
});

export const getSingleCandy = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/candies/${id}`);
  dispatch(gotSingleCandy(data));
};

export const increaseQuantity = (id) => async (dispatch) => {
  const { data } = await axios.put(`/api/candies/${id}/increase`);
  dispatch(updatedQuantity(data));
};

export const decreaseQuantity = (id) => async (dispatch) => {
  const { data } = await axios.put(`/api/candies/${id}/decrease`);
  dispatch(updatedQuantity(data));
};

// REDUCER
const initialState = {
  allCandies: [],
  singleCandy: {},
  status: 'idle',
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      console.log('got all candies');
      return { ...state, allCandies: action.candies };
    case GOT_SINGLE_CANDY:
      return { ...state, singleCandy: action.candy };
    case UPDATED_QUANTITY:
      return { ...state, singleCandy: action.candy };
    default:
      return state;
  }
};

export const candySlice = createSlice({
  name: 'candies',
  initialState,
  reducers: { candyReducer },
  extraReducers(builder) {
    builder
      .addCase(getAllCandies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCandies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCandies = state.allCandies.concat(action.payload);
      });
  },
});

export default candySlice.reducer;
