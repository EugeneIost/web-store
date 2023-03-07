import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import menImage from 'Assets/img/men.png';
import womenImage from 'Assets/img/women.png';
import electronicsImage from 'Assets/img/electronic.png';
import jeweleryImage from 'Assets/img/jewelery.png';

const initialState = {
  items: [],
  categories: [],
  status: null,
};

const categoryImages = {
  "men's clothing": menImage,
  "women's clothing": womenImage,
  electronics: electronicsImage,
  jewelery: jeweleryImage,
};

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

export const selectCategoriesWithImages = (state) => {
  return state.products.categories.map((category) => {
    return {
      title: category,
      imageSrc: categoryImages[category],
    };
  });
};

export const selectItemById = createSelector(
  [(state) => state.products.items, (state, id) => id],
  (items, id) => {
    return items.filter((item) => item.id === id)[0];
  }
);

export const selectProductsByCategory = createSelector(
  [(state) => state.products.items, (state, category) => category],
  (products, category) => {
    return products.filter((item) => item.category === category);
  }
);

export const selectFilteredProducts = createSelector(
  [(state) => state.products.items, (state, searchValue) => searchValue],
  (products, searchValue) => {
    if (!searchValue) {
      return [];
    }

    return products.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.includes(searchValue.toLowerCase())
      );
    });
  }
);

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
