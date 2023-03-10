import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/reducer';
import cartSlice from './reducers/cartSlice';
import carouselObserverSlice from './reducers/carouselObserverSlice';
import { getCartLocalStorage } from './reducers/cartSlice';
import { cartMidleware } from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    carouselObserver: carouselObserverSlice.reducer,
  },
  preloadedState: {
    cart: getCartLocalStorage(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMidleware),
});

export default store;
