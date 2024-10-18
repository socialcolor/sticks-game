import styled from 'styled-components';

export const Section = styled('section')`
  width: 100%;
  max-width: 750px;
  margin: 30px auto;
  font-family: ${({ theme }) => theme.fonts.openSans};
  text-align: center;
`;
export const Button = styled('button')`
  min-width: 70px;
  max-width: 300px;
  margin: auto;
  padding: 5px 10px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({theme}) => theme.colors.red};
  outline: none;
  border: none;
  box-shadow: 0 1px 5px 0 ${({ theme }) => theme.colors.black};
  border-radius: 10px;

  &:focus {
    box-shadow: 0 1px 10px 0 ${({ theme }) => theme.colors.red};
  }
  &:active {
    box-shadow: 0 1px 3px 0 ${({ theme }) => theme.colors.red};
  }
`;
