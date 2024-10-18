import { configureStore } from '@reduxjs/toolkit';
import sticksSlice from './sticksSlice';
import playersSlice from './playersSlice';
import checkIndicateMoveMiddleware from './middleware/checkIndicateMove';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkIndicateMoveMiddleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { sticksSlice, playersSlice };
