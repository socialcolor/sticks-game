import { useDrag } from 'react-dnd';
import * as S from './style';

type StickProps = {
  group: string;
  stick: string;
}

const Stick = ({group, stick}: StickProps) => {
  let dragged = true;
  const [{ isDragging: opacity }, dragRef] = useDrag(() => ({
    type: group,
    item: {group, stick},
    collect: (monitor) => (
      {isDragging: monitor.isDragging() ? 0.4 : 1}
    )
  }))
  return (
    <S.Stick id={stick} ref={dragged ? dragRef : null} $dragged={dragged} $opacity={dragged ? opacity.toString() : '0.4'}/>
  )
};

export default Stick;
