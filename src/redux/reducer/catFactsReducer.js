import { createSlice } from '@reduxjs/toolkit';
import { fetchCatFacts } from '../actions/catFactsActions';

const initialState = {
  catFacts: [],
  page: 1,
  limit: 10,
  isLoading: false,
  error: null,
};

const catFactsSlice = createSlice({
  name: 'catFacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatFacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCatFacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catFacts.push(...action.payload);
        state.page += 1;
      })
      .addCase(fetchCatFacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default catFactsSlice.reducer;
