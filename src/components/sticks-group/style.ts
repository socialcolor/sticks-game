import styled from 'styled-components';

export const Sticks = styled('ul')<{$active?: boolean}>`
  display: flex;
  width: 300px;
  height: 250px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #858484;
  border-top: none;
  border-bottom: none;
  border-radius: 10px;
  transition: background-color ease 350ms;
  ${({$active}) => $active ? 'background-color: rgba(91,253,215, .66)' : ''}
`
