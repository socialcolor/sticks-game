import { configureStore } from '@reduxjs/toolkit';
import sticksSlice from './sticksSlice';
import playersSlice from './playersSlice';

export const store = configureStore({
  reducer: {
    sticksSlice,
    playersSlice,
  }
})
