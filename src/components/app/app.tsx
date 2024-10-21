import './default.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { baseTheme } from '../../styles/theme';
import { useAppSelector, useAppDispatch } from '../../hooks/index.ts';
import { makeToMoveAction } from '../../store/sticksSlice';
import { getGameStatus } from '../../store/selectors.ts';
import * as S from './style.ts';
import Info from '../info/info';
import Players from '../players/players.tsx';
import Sticks from '../sticks/sticks';
import Dustbin from '../dustbin/dustbin';
import Button from '../button/button';
import StartGame from '../start-game/start-game.tsx';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector(getGameStatus());

  const handleChangePlayerClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault();
    dispatch(makeToMoveAction());
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={baseTheme}>
        {gameStatus ? (
          <S.Section>
            <Players />
            <Dustbin />
            <Button onButtonClick={handleChangePlayerClick}>Сделать ход</Button>
            <Sticks />
          </S.Section>
        ) : (
          <S.Section>
            <Info />
            <StartGame />
          </S.Section>
        )}
      </ThemeProvider>
      <ToastContainer limit={3} />
    </DndProvider>
  );
};

export default App;
