import { createSlice } from '@reduxjs/toolkit';
import { DeleteSticksAction, Sticks } from '../types/state';

export const initialState: Sticks = {
  'one': ['one-one', 'one-two', 'one-three', 'one-four', 'one-five'],
  'two': ['two-one', 'two-two', 'two-three', 'two-four'],
  'three': ['three-one', 'three-two', 'three-three'],
}

export const sticksSlice = createSlice({
  name: 'sticks',
  initialState: initialState,
  reducers: {
    deleteSticks: (state: Sticks, action: DeleteSticksAction) => {
      const groupName = action.payload.stick.split('-')[0];
      const stickName = action.payload.stick.split('-')[1];

      state[groupName as keyof Sticks] = state[groupName as keyof Sticks].filter(name => name !== stickName);
    }
  }
})

export const { deleteSticks } = sticksSlice.actions;

export default sticksSlice.reducer;
