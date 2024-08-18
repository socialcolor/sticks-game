import { useAppDispatch } from '../../hooks';
import { changeActivePlayerAction } from '../../store/playersSlice';
import { makeToMoveAction } from '../../store/sticksSlice';
import * as S from './button-style';

export default function Button() {
  const dispatch = useAppDispatch();

  return (
    <S.Button onClick={(evt) => {
      evt.preventDefault();
      dispatch(makeToMoveAction());
      dispatch(changeActivePlayerAction());

    }}>Сделать ход</S.Button>
  )
}
