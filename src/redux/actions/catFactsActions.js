import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatFacts = createAsyncThunk('catFacts/fetch', async ({ page, limit }) => {
  try {
    const response = await axios.get(`https://catfact.ninja/facts?page=${page}&limit=${limit}`);
    return response.data.data;
  } catch (error) {
    throw Error('Failed to fetch cat facts');
  }
});