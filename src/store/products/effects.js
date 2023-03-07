import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'productSlice/categories',
  async () => {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const data = await response.json();
    return data;
  }
);

export const fetchItems = createAsyncThunk(
  'productSlice/fetchItems',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);
