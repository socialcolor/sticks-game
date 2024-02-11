import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAcceptGroup, getSticks } from '../../store/selectors';
import * as S from './style';
import Stick from '../stick';
import { dataDropType } from '../../types/dnd';

const Sticks = () => {
  const dispatch = useAppDispatch();
  const sticks = useAppSelector(getSticks());
  const acceptGroup = useAppSelector(getAcceptGroup());

  const [, drop] = useDrop({
    accept: acceptGroup,
    drop: (data: dataDropType) => {
      //TODO дописать диспачь addSticks, который будет в стейт возвращять стик в нужную группу
    }
  })

  return (
    <S.Section>
      <S.Wrapper>
        <S.Sticks id='one'>
          {sticks.one.sticks.map(stick => <Stick group={'one'} stick={stick} key={stick}/> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.two.sticks.map(stick => <Stick group={'two'} stick={stick} key={stick}/> )}
        </S.Sticks>
        <S.Sticks id='two'>
          {sticks.three.sticks.map(stick => <Stick group={'three'} stick={stick} key={stick}/> )}
        </S.Sticks>
      </S.Wrapper>
    </S.Section>
  )
}

export default Sticks;
