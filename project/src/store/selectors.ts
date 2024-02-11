import { State } from '../types/state';

export const getSticks = () => (state: State) => state.sticksSlice;
export const getPlayers = () => (state: State) => state.playersSlice;
export const getAcceptGroup = () => (state: State) => state.sticksSlice.acceptGroup;
