import { createSlice } from '@reduxjs/toolkit';
import {
  changeGameStatusAction,
  GameTypes,
  initialStateGameType,
} from '../types/state';

const initialState: initialStateGameType = {
  gameStatus: false,
  gameType: GameTypes.computer,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    startGame: (state, action: changeGameStatusAction) => {
      state.gameStatus = action.payload.gameStatus;
      state.gameType = action.payload.gameType;
    },
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
