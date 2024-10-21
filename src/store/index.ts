import { configureStore } from '@reduxjs/toolkit';
import checkIndicateMoveMiddleware from './middleware/checkIndicateMove';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkIndicateMoveMiddleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
