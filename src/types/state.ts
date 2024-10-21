import { store } from '../store';

export enum GameTypes {
  players = 'players',
  computer = 'computers',
}

export enum Players {
  player = 'Вы',
  computer = 'Компьютер'
}

type gameStatusType = {
  gameStatus: boolean;
};

type Group = {
  disabled: boolean;
  sticks: string[];
};

export type Groups = {
  one: Group;
  two: Group;
  three: Group;
};

export type initialStateSticksType = {
  trash: {
    isTrash: boolean;
    group: string | null;
    sticks: string[];
  };
  acceptGroup: string[];
} & Groups &
  gameStatusType;

export type initialStatePlayersType = {
  playerOne: string;
  playerTwo: string;
  active: 'playerOne' | 'playerTwo';
};

export type initialStateGameType = {
  gameStatus: boolean;
  gameType: GameTypes;
}

export type ActionType = {
  type: string;
  payload?: unknown;
};

export type sticksActionType = {
  payload: {
    group: keyof Groups;
    stick: string;
  };
};

export type changeGameStatusAction = {
  payload: {
    gameStatus: boolean;
    gameType: GameTypes;
  };
};

export type ChangeAcceptGroupAcion = {
  payload: string;
};

export type ChangeNameAction = {
  payload: {
    id: keyof Omit<initialStatePlayersType, 'active'>;
    name: string;
  };
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
