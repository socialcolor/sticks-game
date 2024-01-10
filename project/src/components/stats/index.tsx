import * as S from './style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPlayers } from '../../store/selectors';
import { changeNamePlayerAction } from '../../store/playersSlice';

const Stats = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const players = useAppSelector(getPlayers());

  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    dispatch(changeNamePlayerAction({id: evt.target.id, name: evt.target.value}))
  }


  return (
    <S.Section>
      <S.Description>Ходит</S.Description>
       <S.Wrapper>
        <S.PlayerName id={"playerOne"} $show onChange={onNameChange} type='text' value={players.playerOne}/>
        <S.PlayerName id={"playerTwo"} onChange={onNameChange} type='text' value={players.playerTwo}/>
       </S.Wrapper>
    </S.Section>
  )
}

export default Stats;
