import { store } from "../store";

export type initialStateType = {
  one: {
    disabled: boolean
    sticks: string[]
  },
  two: {
    disabled: boolean
    sticks: string[]
  },
  three: {
    disabled: boolean
    sticks: string[]
  },
  trash: {
    isTrash: boolean,
    group: string | null,
    sticks: string[]
  }
  acceptGroup: string[],
}


export type Players = {
  playerOne: string,
  playerTwo: string,
  active: 'playerOne' | 'playerTwo',
}
type SticksGroup = keyof initialStateType

export type sticksActionType = {
    payload: {
      group: SticksGroup,
      stick: string,
  }
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
