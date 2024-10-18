import { useAppDispatch } from '../../hooks';
import { changeGameStatus } from '../../store/sticksSlice';
import Button from '../button/button';
import * as S from './style';

const NewGame = () => {
  const dispatch = useAppDispatch();
  
  const handleStartGameClick = () => dispatch(changeGameStatus(true))

  return (
    <S.Section>
      <Button onButtonClick={handleStartGameClick}>Начать игру</Button>
    </S.Section>
  );
};

export default NewGame;
