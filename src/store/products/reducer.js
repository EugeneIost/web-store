import { createSlice } from '@reduxjs/toolkit';

import { fetchItems, fetchCategories } from './effects';

const initialState = {
  items: [],
  categories: [],
  status: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'rejected';
    },
    [fetchCategories.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchCategories.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default productSlice;
