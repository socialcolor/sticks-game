import { store } from "../store";

export type Sticks = {
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
  acceptGroup: string[],
}


export type Players = {
  [name: string]: string,
}

export type DeleteSticksAction = {
    payload: {
      group: keyof Sticks,
      stick: string,
  }
}

export type ChangeAcceptGroupAcion = {
  payload: string
}
export type ChangeNameAction = {
  payload: {
    id: keyof Players,
    name: string,
  }
}
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
