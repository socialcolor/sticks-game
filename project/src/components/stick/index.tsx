import { useDrag } from 'react-dnd';
import * as S from './style';

type StickProps = {
  name: string
}

const Stick = ({name}: StickProps) => {
  const [, dragRef] = useDrag(() => ({
    type: ' stick',
    item: name
  }))
  return (
    <S.Stick id={name} ref={dragRef} />
  )
};

export default Stick;
