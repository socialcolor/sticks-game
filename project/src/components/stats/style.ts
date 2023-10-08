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
`
export const PlayerName = styled('span')<{$show?: boolean}>`
  min-width: 70px;
  max-width: 300px;
  margin: auto;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  border: none;

  ${({$show, theme}) => $show &&`
      color: ${theme.colors.name};
      border-bottom: 1px solid ${theme.colors.name};
  `}
  `
