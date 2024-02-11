import { createSlice } from '@reduxjs/toolkit';
import { ChangeAcceptGroupAcion, DeleteSticksAction, Sticks } from '../types/state';

export const initialState: Sticks = {
  one: {
    disabled: false,
    sticks: ['one', 'two', 'three', 'four', 'five'],
  },
  two: {
    disabled: false,
    sticks: ['one', 'two', 'three', 'four'],
  },
  three: {
    disabled: false,
    sticks: ['one', 'two', 'three'],
  },
  acceptGroup: ['one', 'two', 'three']
}

export const sticksSlice = createSlice({
  name: 'sticks',
  initialState: initialState,
  reducers: {
    deleteSticks: (state: Sticks, action: DeleteSticksAction) => {
      const group = state[action.payload.group];
      if (group && 'sticks' in group) {
        group.sticks = group.sticks.filter(stick => stick !== action.payload.stick)
      };
    },
    changeAcceptGroup: (state: Sticks, action: ChangeAcceptGroupAcion) => {
     state.acceptGroup = [action.payload];
    },
    defaultAcceptGroup: (state: Sticks) => {
      state.acceptGroup = ['one', 'two', 'three'];
    }
  }
})

export const { deleteSticks, changeAcceptGroup, defaultAcceptGroup } = sticksSlice.actions;

export default sticksSlice.reducer;
