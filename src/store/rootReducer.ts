import { combineReducers } from '@reduxjs/toolkit';
import { sticksSlice, playersSlice } from './index';

const rootReducer = combineReducers({
  sticksSlice: sticksSlice,
  playersSlice: playersSlice,
});

export default rootReducer;
