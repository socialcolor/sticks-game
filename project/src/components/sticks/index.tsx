import * as S from './style';
// import { SticksGroups } from '../../const';
import { useAppSelector } from '../../hooks';
import { getSticks } from '../../store/selectors';

const Sticks = () => {
  const sticks = useAppSelector(getSticks())
  return (
    <S.Section>
      <S.Wrapper>
        <S.Sticks id='one'>
          {sticks.one.map((sticks, index) => <S.Stick key={`one-${index}`} /> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.two.map((sticks, index) => <S.Stick key={`one-${index}`} /> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.three.map((sticks, index) => <S.Stick key={`one-${index}`} /> )}
        </S.Sticks>
      </S.Wrapper>
    </S.Section>
    // <S.Section>
    //   <S.Wrapper>
    //     {SticksGroups.map(group => {
    //         return (
    //           <S.Sticks key={group.name}>
    //             {group.quantity.map(el => <S.Stick key={group.name+el} />)}
    //           </S.Sticks>
    //         )
    //     })}
    //   </S.Wrapper>
    // </S.Section>
  )
}

export default Sticks;
