import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Price {
  symbol: string;
  rate: number;
  volume: number;
  cap: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
  timestamp: string;
}

export const fetchPrices = createAsyncThunk(
  'prices/fetchPrices',
  async (symbol: string) => {
    try {
      const response = await axios.get('http://localhost:5000/api/prices', {
        params: { symbol }
      });
      return response.data as Price[];
    } catch (error) {
      console.error('Error fetching prices:', error);
      throw error;
    }
  }
);

const priceSlice = createSlice({
  name: 'prices',
  initialState: [] as Price[],
  reducers: {
    clearPrices: (state) => {
      return []; // Return an empty array to clear the prices
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.fulfilled, (state, action: PayloadAction<Price[]>) => {
      return action.payload; // Replace state with new data
    });
  }
});

export const { clearPrices } = priceSlice.actions;
export const priceReducer = priceSlice.reducer;
