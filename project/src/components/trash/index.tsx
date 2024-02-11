import * as S from './style';
import Stick from '../stick';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { baseTheme } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAcceptGroup } from '../../store/selectors';
import { changeAcceptGroup, deleteSticks } from '../../store/sticksSlice';
import { dataDropType } from '../../types/dnd';

type dropStateType = {
  group: string,
  sticks: string[] | [],
}

const Trash = () => {
  const dispatch = useAppDispatch();
  const acceptGroup = useAppSelector(getAcceptGroup());
  const [dropState, setDropState] = useState<dropStateType>({group: '', sticks: []})

  const [{ color, brorderWidth }, drop] = useDrop({
    accept: acceptGroup,
    drop: (data: dataDropType) => {
      dispatch(changeAcceptGroup(data.group))
      dispatch(deleteSticks({group: data.group, stick: data.stick}))
      setDropState(prevState => ({
        ...prevState,
        group: data.group,
        sticks: [...prevState.sticks, data.stick]

      }));
    },
    collect: (monitor) => (
      { color: monitor.canDrop() ? baseTheme.colors.red : baseTheme.colors.black,
        brorderWidth: monitor.canDrop() ? '2px' : '1px',
      }
    )
  })
  return (
    <S.Trash ref={drop} $color={color} $borderWidth={brorderWidth}>
      Скидывать сюда
      {dropState.sticks.map((stick) => <Stick group={dropState.group} stick={stick} key={`${dropState.group}-${stick}`}/>)}
    </S.Trash>
  )
}

export default Trash;
