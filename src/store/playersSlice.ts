import { createSlice } from '@reduxjs/toolkit';
import { Players, ChangeNameAction } from '../types/state';
import { sticksSlice } from './sticksSlice';

export const initialState: Players = {
  playerOne: 'Игрок 1',
  playerTwo: 'Игрок 2',
  active: 'playerOne',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    changeNamePlayerAction: (state: Players, action: ChangeNameAction) => {
      state[action.payload.id] = action.payload.name;
    },
    changeActivePlayerAction: (state) => {
      state.active = state.active === 'playerOne' ? 'playerTwo' : 'playerOne';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sticksSlice.actions.makeToMoveAction, (state) => {
      state.active = state.active === 'playerOne' ? 'playerTwo' : 'playerOne';
    })
  }
});

export const { changeNamePlayerAction, changeActivePlayerAction } = playersSlice.actions;

export default playersSlice.reducer;
