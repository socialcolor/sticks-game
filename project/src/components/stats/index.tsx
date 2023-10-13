import { useState } from 'react';
import * as S from './style';

const Stats = ():JSX.Element => {
  const [names, setName] = useState({playerOne: 'Игрок 1', playerTwo: 'Игрок 2'})
  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if(evt.currentTarget.id === 'playerOne' && evt.currentTarget.textContent) setName({playerOne: evt.currentTarget.textContent, playerTwo: names.playerTwo})
    if(evt.currentTarget.id === 'playerTwo' && evt.currentTarget.textContent) setName({playerOne: names.playerOne, playerTwo: evt.currentTarget.textContent})
  }
  return (
    <S.Section>
      <S.Description>Ходит</S.Description>
       <S.Wrapper>
        <S.PlayerName id={"playerOne"} $show onChange={onNameChange} contentEditable suppressContentEditableWarning={true}>{names.playerOne}</S.PlayerName>
        <S.PlayerName id={"playerTwo"} onChange={onNameChange} contentEditable suppressContentEditableWarning={true}>{names.playerTwo}</S.PlayerName>
       </S.Wrapper>
    </S.Section>
  )
}

export default Stats;
