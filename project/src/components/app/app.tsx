import { useAppDispatch } from '../../hooks';
import { changeActivePlayerAction } from '../../store/playersSlice';
import { makeToMoveAction } from '../../store/sticksSlice';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAppSelector } from '../../hooks/index.ts';
import { getGameStatus } from '../../store/selectors.ts';
import './default.css';
import Info from '../info/info';
import Stats from '../stats/stats.tsx';
import Sticks from '../sticks/sticks';
import Dustbin from '../dustbin/dustbin';
import Button from '../button/button';
import NewGame from '../new-game/new-game.tsx';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector(getGameStatus());

  const handleChangePlayerClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault();
    dispatch(makeToMoveAction());
    dispatch(changeActivePlayerAction());
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={baseTheme}>
        {gameStatus ? (
          <>
            <Stats />
            <Dustbin />
            <Button onButtonClick={handleChangePlayerClick}>Сделать ход</Button>
            <Sticks />
          </>
        ) : (
          <>
            <Info />
            <NewGame />
          </>
        )}
      </ThemeProvider>
    </DndProvider>
  );
};

export default App;
