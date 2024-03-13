import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './default.css'
import Info from '../info/info';
import Stats from '../stats/stats';
import Sticks from '../sticks/sticks';
import Dustbin from '../dustbin/dustbin';
import Button from '../button/button';

const App = (): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={baseTheme}>
        <Info />
        <Stats />
        <Dustbin />
        <Button />
        <Sticks />
      </ThemeProvider>
    </DndProvider>
  )
}

export default App;
