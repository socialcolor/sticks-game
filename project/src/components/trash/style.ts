import styled from 'styled-components';

export const Trash = styled.ul<{$color: string, $borderWidth: string}>`
  width: fit-content;
  height: 50px;
  margin: 20px auto 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  outline: dashed ;
  outline-color: ${({$color: $canDrop}) => $canDrop};
  outline-width: ${({$borderWidth}) => $borderWidth};
  list-style-type: none;
`
