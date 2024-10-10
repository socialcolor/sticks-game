import 'styled-components';
import { IBaseTheme } from './types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {}
}
