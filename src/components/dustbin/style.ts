import styled from 'styled-components';

export const Dustbin = styled.ul<{$isActive: boolean}>`
  position: relative;
  width: fit-content;
  min-width: 200px;
  height: 50px;
  margin: 20px auto 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  list-style-type: none;
  border: 1px solid #858484;
  border-top: none;
  border-bottom: none;
  border-radius: 10px;

  &::before {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    content: 'Убирать палочки сюда';
    top: 0;
    right: 0%;
    border-radius: 10px;
    text-align: center;
    transition: background-color ease 350ms;
    ${({$isActive}) => $isActive ? 'background-color: rgba(91,253,215, .66)' : ''}
  }

`

