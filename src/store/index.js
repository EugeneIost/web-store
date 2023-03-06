import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";
import carouselObserverSlice from "../reducers/carouselObserverSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    carouselObserver: carouselObserverSlice.reducer,
  },
});

export default store;
