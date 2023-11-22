import { configureStore } from '@reduxjs/toolkit';
import sticksSlice from './sticksSlice';

export const store = configureStore({
  reducer: {
    sticksSlice,
  }
})
