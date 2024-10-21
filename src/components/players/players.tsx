import * as S from './style.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import {
  getActivePlayer,
  getGameType,
  getPlayers,
} from '../../store/selectors.ts';
import { changeNamePlayerAction } from '../../store/playersSlice.ts';
import { GameTypes } from '../../types/state.ts';

const Players = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const typeGame = useAppSelector(getGameType());
  const players = useAppSelector(getPlayers());
  const activePlayer = useAppSelector(getActivePlayer());
  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    if (evt.target.id === 'playerOne' || evt.target.id === 'playerTwo') {
      dispatch(
        changeNamePlayerAction({ id: evt.target.id, name: evt.target.value }),
      );
    }
  };

  if (typeGame === GameTypes.players) {
    return (
      <S.Section>
        <S.Description>Ходит</S.Description>
        <S.Wrapper>
          <S.PlayerName
            id={'playerOne'}
            $active={activePlayer === players.playerOne}
            onChange={onNameChange}
            type="text"
            value={players.playerOne}
          />
          <S.PlayerName
            id={'playerTwo'}
            $active={activePlayer === players.playerTwo}
            onChange={onNameChange}
            type="text"
            value={players.playerTwo}
          />
        </S.Wrapper>
      </S.Section>
    );
  } else {
    return (
      <S.Section>
        <S.Description>Ходит: {activePlayer}</S.Description>
      </S.Section>
    );
  }
};

export default Players;
