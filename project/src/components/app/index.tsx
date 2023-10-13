import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import './default.css'
import * as S from './style';
import Info from '../info';
import Stats from '../stats';
import Sticks from '../sticks';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Info />
      <Stats />
      <Sticks />
      <S.Button>Забрать трубочки</S.Button>
    </ThemeProvider>
  )
}

export default App;
