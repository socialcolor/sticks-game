import { createSlice } from '@reduxjs/toolkit';
import { ChangeAcceptGroupAcion, sticksActionType, initialStateType } from '../types/state';

export const initialState: initialStateType = {
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
  trash: {
    isTrash: true,
    group: null,
    sticks: []
  },
  acceptGroup: ['one', 'two', 'three'],
}


export const sticksSlice = createSlice({
  name: 'sticks',
  initialState: initialState,
  reducers: {
    deleteStick: (state: initialStateType, action: sticksActionType) => {
      const group = state[action.payload.group];
      group.sticks = group.sticks.filter(stick => stick !== action.payload.stick)
    },
    addStick: (state: initialStateType, action: sticksActionType) => {
      const group = state[action.payload.group];
      group.sticks.push(action.payload.stick);
    },
    addStickToTrash: (state: initialStateType, action: sticksActionType) => {
      const { group, stick } = action.payload;
      state.trash.group = group;
      state.trash.sticks.push(stick);
    },
    deleteStickFromTrash: (state: initialStateType, action: sticksActionType) => {
      state.trash.sticks = state.trash.sticks.filter(stick => stick !== action.payload.stick);
      if(!state.trash.sticks.length) {
        state.trash.group = null;
        state.acceptGroup = ['one', 'two', 'three'];
      }
    },
    changeAcceptGroup: (state: initialStateType, action: ChangeAcceptGroupAcion) => {
      state.acceptGroup = [action.payload];
    },
    defaultAcceptGroup: (state: initialStateType) => {
      state.acceptGroup = ['one', 'two', 'three'];
    },
    makeToMoveAction: (state) => {
       state.acceptGroup = ['one', 'two', 'three'];
       state.one.disabled = false;
       state.two.disabled = false;
       state.three.disabled = false;
       state.trash = {
        isTrash: true,
        group: null,
        sticks: []
      }
    }
  }
})

export const { deleteStick, addStick, addStickToTrash, deleteStickFromTrash, changeAcceptGroup, defaultAcceptGroup, makeToMoveAction } = sticksSlice.actions;

export default sticksSlice.reducer;
