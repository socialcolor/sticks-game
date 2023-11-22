import { store } from "../store";

export type Sticks = {
  one: boolean[],
  two: boolean[],
  three: boolean[],
}

export type DeleteSticksAction = {
    payload: {
      name: keyof Sticks,
      sticks: number,
  }
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
