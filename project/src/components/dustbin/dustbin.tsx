import Stick from '../stick/stick';
import * as S from './style';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAcceptGroup, getTrashSticks } from '../../store/selectors';
import { addStickToTrash, changeAcceptGroup, deleteStick } from '../../store/sticksSlice';
import { dataDropType } from '../../types/dnd';

const Dustbin = () => {
  const dispatch = useAppDispatch();
  const acceptGroup = useAppSelector(getAcceptGroup());
  const sticksTrash = useAppSelector(getTrashSticks());

  const [{ isActive }, drop] = useDrop({
    accept: acceptGroup,
    drop: (data: dataDropType) => {
      dispatch(changeAcceptGroup(data.group))
      dispatch(addStickToTrash({ group: data.group, stick: data.stick }))
      dispatch(deleteStick({ group: data.group, stick: data.stick }))
    },
    collect: (monitor) => (
      { isActive: monitor.canDrop() }
    )
  })

  return (
      <S.Dustbin ref={drop} $isActive={isActive}>
        {sticksTrash.sticks.map((stick) => <Stick group={sticksTrash.group as string} trash={true} stick={stick} key={`${sticksTrash.group}-${stick}`} />)}
      </S.Dustbin>
  )
}

export default Dustbin;
