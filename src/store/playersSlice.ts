import { createSlice } from '@reduxjs/toolkit';
import { initialStatePlayersType, ChangeNameAction, GameTypes } from '../types/state';
import { sticksSlice } from './sticksSlice';
import { gameSlice } from './gameSlice';
import { randomizierPlayers } from '../utls';

export const initialState: initialStatePlayersType = {
  playerOne: 'Игрок 1',
  playerTwo: 'Игрок 2',
  active: 'playerOne',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    changeNamePlayerAction: (
      state: initialStatePlayersType,
      action: ChangeNameAction,
    ) => {
      state[action.payload.id] = action.payload.name;
    },
    changeActivePlayerAction: (state) => {
      state.active = state.active === 'playerOne' ? 'playerTwo' : 'playerOne';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sticksSlice.actions.makeToMoveAction, (state) => {
      state.active = state.active === 'playerOne' ? 'playerTwo' : 'playerOne';
    });
    builder.addCase(gameSlice.actions.startGame, (state, action) => {
      if(action.payload.gameType === GameTypes.computer) {
        const players = randomizierPlayers();
        state.playerOne = players.playerOne;
        state.playerTwo = players.playerTwo;
      }
    })
  },
});

export const { changeNamePlayerAction, changeActivePlayerAction } =
  playersSlice.actions;

export default playersSlice.reducer;
