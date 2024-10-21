import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { startGame } from '../../store/gameSlice';
import Button from '../button/button';
import * as S from './style';
import { GameTypes } from '../../types/state';

const StartGame = () => {
  const formRef = useRef(null);
  const dispatch = useAppDispatch();

  const handleStartGameClick = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  
    const data = new FormData(formRef.current!);
    const gameType = data.get('gameType');
  
    if (gameType && typeof gameType === 'string') {
      const dataGame = {
        gameStatus: true,
        gameType: gameType as GameTypes
      };
  
      dispatch(startGame(dataGame));
    }
  };

  return (
    <S.Section>
      <S.ConfigForm ref={formRef} onSubmit={handleStartGameClick}>
        <S.FieldSet>
          <S.Legend>Тип игры</S.Legend>
          <S.Label>
            <S.Input id={'computers'} name={'gameType'} value={GameTypes.computer} type={'radio'} defaultChecked />С компьютером
          </S.Label>
          <S.Label>
            <S.Input id={'twoPlayers'} name={'gameType'} value={GameTypes.players} type={'radio'} />Вдвоем
          </S.Label>
        </S.FieldSet>
        <Button type='submit'>Начать игру</Button>
      </S.ConfigForm>
    </S.Section>
  );
};

export default StartGame;
