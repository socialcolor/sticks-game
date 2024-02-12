import * as S from './style';
import Stick from '../stick';
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
        <S.Sticks id='one' $active={draggedItem && draggedItem.group === 'one' ? true : false}>
          {sticks.one.sticks.map(stick => <Stick group={'one'} trash={false} stick={stick} key={`one-${stick}`}/> )}
        </S.Sticks >
        <S.Sticks id='two' $active={draggedItem && draggedItem.group === 'two' ? true : false}>
          {sticks.two.sticks.map(stick => <Stick group={'two'} trash={false}stick={stick} key={`two-${stick}`}/> )}
        </S.Sticks>
        <S.Sticks id='three' $active={draggedItem && draggedItem.group === 'three' ? true : false}>
          {sticks.three.sticks.map(stick => <Stick group={'three'} trash={false} stick={stick} key={`three-${stick}`}/> )}
        </S.Sticks>
      </S.Wrapper>
    </S.Section>
  )
}

export default Sticks;
