import * as S from './style';
import SticksGroup from '../sticks-group/sticks-group';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAcceptGroup, getSticks } from '../../store/selectors';
import { dataDropType } from '../../types/dnd';
import { addStick, deleteStickFromTrash } from '../../store/sticksSlice';

const Sticks = () => {
  const dispatch = useAppDispatch();
  const sticks = useAppSelector(getSticks());
  const acceptGroup = useAppSelector(getAcceptGroup());

  const [{draggedItem}, drop] = useDrop({
    accept: acceptGroup,
    drop: (data: dataDropType) => {
      if(data.trash) {
        dispatch(addStick(data))
        dispatch(deleteStickFromTrash(data))
      }
    },
    collect: (monitor) => ({
      draggedItem: monitor.getItem(),
    }),
  })
  return (
    <S.Section>
      <S.Wrapper ref={drop}>
        <SticksGroup group='one' sticks={sticks.one.sticks} active={draggedItem}/>
        <SticksGroup group='two' sticks={sticks.two.sticks} active={draggedItem}/>
        <SticksGroup group='three' sticks={sticks.three.sticks} active={draggedItem}/>
      </S.Wrapper>
    </S.Section>
  )
}

export default Sticks;
