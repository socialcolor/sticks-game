import * as S from './style';
import { SticksGroups } from '../../const';

const Sticks = () => {
  return (
    <S.Section>
      <S.Wrapper>
        {SticksGroups.map(group => {
            return (
              <S.Sticks key={group.name}>
                {group.quantity.map(el => <S.Stick key={group.name+el} />)}
              </S.Sticks>
            )
        })}
      </S.Wrapper>
    </S.Section>
  )
}

export default Sticks;
