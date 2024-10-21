import * as S from './style';

type ButtonProps = {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode;
}
export default function Button({onButtonClick, children}: ButtonProps) {

  return (
    <S.Button onClick={onButtonClick}>{children}</S.Button>
  )
}
