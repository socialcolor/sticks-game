import { createSlice } from '@reduxjs/toolkit';
import { Players, ChangeNameAction } from '../types/state';

export const initialState: Players = {
  playerOne: 'Игрок 11',
  playerTwo: 'Игрок 22',
}

export const playersSlice = createSlice({
  name: 'players',
  initialState: initialState,
  reducers: {
    changeNamePlayerAction: (state: Players, action: ChangeNameAction) => {
      state[action.payload.id] = action.payload.name;
    }
  }
})

export const {changeNamePlayerAction} = playersSlice.actions;

export default playersSlice.reducer;
