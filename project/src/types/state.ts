import { store } from '../store';

type gameStatusType = {
  gameStatus: boolean
}

type Group = {
  disabled: boolean;
  sticks: string[];
};

export type Groups = {
  one: Group;
  two: Group;
  three: Group;
};

export type initialStateType = {
  trash: {
    isTrash: boolean,
    group: string | null,
    sticks: string[]
  },
  acceptGroup: string[],
} & Groups & gameStatusType


export type Players = {
  playerOne: string,
  playerTwo: string,
  active: 'playerOne' | 'playerTwo',
}

export type sticksActionType = {
    payload: {
      group: keyof Groups,
      stick: string,
  }
}

export type changeGameStatusAction = {
  payload: boolean
}
export type ChangeAcceptGroupAcion = {
  payload: string
}
export type ChangeNameAction = {
  payload: {
    id: keyof Omit<Players, 'active'>,
    name: string,
  }
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
