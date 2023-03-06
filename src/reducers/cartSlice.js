import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.totalAmount += 1;
      const newItem = action.payload;
      const expectedItem = state.items.find((item) => item.id === newItem.id);

      if (!expectedItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      if (expectedItem) {
        expectedItem.quantity++;
        expectedItem.totalPrice = expectedItem.price * expectedItem.quantity;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const expectedItem = state.items.find((item) => item.id === id);
      state.totalAmount--;
      if (expectedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        expectedItem.quantity--;
        expectedItem.totalPrice = expectedItem.totalPrice - expectedItem.price;
      }
    },

    clearItem(state, action) {
      const id = action.payload;
      state.totalAmount =
        state.totalAmount - state.items.find((item) => item.id === id).quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart, clearItem } = cartSlice.actions;
export default cartSlice;
