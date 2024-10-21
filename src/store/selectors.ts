import { State } from '../types/state';

export const getGameStatus = () => (state: State) => state.gameSlice.gameStatus;
export const getGameType = () => (state: State) => state.gameSlice.gameType;
export const getSticks = () => (state: State) => state.sticksSlice;
export const getPlayers = () => (state: State) => state.playersSlice;
export const getActivePlayer = () => (state: State) => state.playersSlice[state.playersSlice.active];
export const getAcceptGroup = () => (state: State) => state.sticksSlice.acceptGroup;
export const getTrashSticks = () => (state: State) => state.sticksSlice.trash;
