import { combineReducers } from '@reduxjs/toolkit';
import sticksSlice from './sticksSlice';
import playersSlice from './playersSlice';
import gameSlice from './gameSlice';

const rootReducer = combineReducers({
  gameSlice: gameSlice,
  sticksSlice: sticksSlice,
  playersSlice: playersSlice,
});

export default rootReducer;
