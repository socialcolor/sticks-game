import { styled } from 'styled-components';

export const Section = styled('section')`
  width: 300px;
  height: 100%;
  margin: auto;
`
export const Description = styled('p')`
  text-align: center;
  font-size: 16px;
`
export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`
export const PlayerName = styled('input')<{$show?: boolean}>`
  min-width: 70px;
  max-width: 300px;
  margin: auto;
  padding: 5px 10px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  border: none;
  box-shadow: 0 3px 3px 0 ${({theme}) => theme.colors.black} ;
  border-radius: 10px;

  &:focus {
    box-shadow: 0 3px 3px 0 ${({theme}) => theme.colors.red};
  }

  ${({$show, theme}) => $show &&`
      color: ${theme.colors.red};
      box-shadow: 0 3px 3px 0 ${theme.colors.red};
      border-bottom: 1px solid ${theme.colors.red};
  `}
  `
