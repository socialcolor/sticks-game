import { store } from "../store";

export type Sticks = {
  'one': string[],
  'two': string[],
  'three': string[],
}

export type Players = {
  [name: string]: string,
}

export type DeleteSticksAction = {
    payload: {
      stick: string,
  }
}

export type changeNameAction = {
  payload: {
    id: keyof Players,
    name: string,
  }
}
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
