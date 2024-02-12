import { initialStateType } from './state';

export type dataDropType = {
  group: keyof initialStateType,
  stick: string
  trash: boolean
}
