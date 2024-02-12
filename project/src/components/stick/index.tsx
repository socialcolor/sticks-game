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
 
  let dragged = true;

  const [{ isDragging: opacity }, dragRef] = useDrag(() => ({
    type: group,
    item: {group, stick, trash},
    collect: (monitor) => (
      {
        isDragging: monitor.isDragging() ? 0 : 1,
      }
    )
  }))
  return (
    <S.Stick id={stick} ref={dragRef} $opacity={dragged ? opacity.toString() : '0.4'}/>
  )
};

export default Stick;
