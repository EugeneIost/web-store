import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: [],
  status: null,
};

export const fetchItems = createAsyncThunk(
  "productSlice/fetchItems",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const categoriesSet = new Set(data.map((item) => item.category));
    const categories = [...categoriesSet];
    return { data, categories };
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
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.items = action.payload.data;
      state.categories = action.payload.categories;
    },
    [fetchItems.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const {} = productSlice.actions;
export default productSlice;
