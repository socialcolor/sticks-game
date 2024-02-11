import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './default.css'
import * as S from './style';
import Info from '../info';
import Stats from '../stats';
import Sticks from '../sticks';
import Trash from '../trash';

const App = (): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={baseTheme}>
        <Info />
        <Stats />
        <Trash />
        <Sticks />
        <S.Button>Забрать трубочки</S.Button>
      </ThemeProvider>
    </DndProvider>
  )
}

export default App;
