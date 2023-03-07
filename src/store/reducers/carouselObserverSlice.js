import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inView: true,
};

const carouselObserverSlice = createSlice({
  name: 'carouselObserver',
  initialState,
  reducers: {
    setInView(state, action) {
      state.inView = action.payload;
    },
  },
});

export const { setInView } = carouselObserverSlice.actions;
export default carouselObserverSlice;
