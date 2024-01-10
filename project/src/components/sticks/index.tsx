import { useAppSelector } from '../../hooks';
import { getSticks } from '../../store/selectors';
import * as S from './style';
import Stick from '../stick';


const Sticks = () => {
  const sticks = useAppSelector(getSticks());
  return (
    <S.Section>
      <S.Wrapper>
        <S.Sticks id='one'>
          {sticks.one.map(stick => <Stick name={stick} key={stick}/> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.two.map(stick => <Stick name={stick} key={stick}/> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.three.map(stick => <Stick name={stick} key={stick}/> )}
        </S.Sticks>
      </S.Wrapper>
    </S.Section>
  )
}

export default Sticks;
