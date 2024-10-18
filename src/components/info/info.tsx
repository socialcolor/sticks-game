import * as S from './style';

const Info = (): JSX.Element => {
  return (
    <S.Section>
      <S.Title>Игра в палочки</S.Title>
      <S.Description>Каждый игрок поочередно забирает любое количество трубочек, но только из <strong>одной группы</strong>, проигрывает тот, кто забирает трубочки последним</S.Description>
    </S.Section>
  )
}

export default Info;
