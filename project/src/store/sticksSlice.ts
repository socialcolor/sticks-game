import { createSlice } from '@reduxjs/toolkit';
import { DeleteSticksAction, Sticks } from '../types/state';

export const initialState: Sticks = {
  'one': [true, true, true, true, true],
  'two': [true, true, true, true],
  'three': [true, true, true],
}

export const sticksSlice = createSlice({
  name: 'sticks',
  initialState: initialState,
  reducers: {
    deleteSticks: (state: Sticks, action: DeleteSticksAction) => {
      const group = [...state[action.payload.name]];
      const sticks = action.payload.sticks;

      let counter = 0;

      group.map((stick) => {
        if(counter <= sticks && stick === true) {
          counter++
          return !stick;
        }
        return stick;
      })
      state[action.payload.name] = group;
    },
  }
})

export const {deleteSticks} = sticksSlice.actions;

export default sticksSlice.reducer;
