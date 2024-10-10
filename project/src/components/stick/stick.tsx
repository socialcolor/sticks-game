import { useDrag } from 'react-dnd';
import * as S from './style';
import { useAppSelector } from '../../hooks';
import { getAcceptGroup } from '../../store/selectors';

type StickProps = {
  group: string;
  stick: string;
  trash: boolean;
}

const Stick = ({group, stick, trash}: StickProps) => {
  const acceptGroup = useAppSelector(getAcceptGroup())

  let draggable = acceptGroup.includes(group);

  const [{ isDragging: opacity }, dragRef] = useDrag(() => ({
    type: group,
    item: {group, stick, trash},
    canDrag: draggable,
    collect: (monitor) => ({isDragging: monitor.isDragging() ? 0 : 1})
  }))
  return (
    <S.Stick id={stick} ref={dragRef} $active={draggable} $opacity={draggable ? opacity.toString() : '0.4'} ></S.Stick>
  )
};

export default Stick;
