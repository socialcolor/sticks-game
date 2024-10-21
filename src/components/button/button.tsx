import * as S from './style';

type ButtonProps = {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
export default function Button({onButtonClick, children, type = 'button'}: ButtonProps) {

  return (
    <S.Button onClick={onButtonClick} type={type}>{children}</S.Button>
  )
}
