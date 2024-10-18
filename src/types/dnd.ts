import { Groups } from './state';

export type dataDropType = {
  group: keyof Groups,
  stick: string
  trash: boolean
}
