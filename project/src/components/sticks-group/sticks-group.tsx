import * as S from './style';
import Stick from '../stick/stick';
import { dataDropType } from '../../types/dnd';

type SticksGroupProp = {
  group: string
  sticks: string[],
  active: dataDropType
}


const SticksGroup = ({group, sticks, active}:SticksGroupProp) => {
  return (
    <S.Sticks id={group} $active={active && active.group === group ? true : false}>
      {sticks.map(stick => <Stick group={group} trash={false} stick={stick} key={`${group}-${stick}`}/>)}
    </S.Sticks >
  )
}

export default SticksGroup
