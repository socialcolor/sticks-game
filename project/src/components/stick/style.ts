import styled from 'styled-components';

export const Stick = styled('li')<{$opacity: string, $dragged: boolean}>`
  position: relative;
  width: 19px;
  height: 100%;
  max-height: 250px;
  background: linear-gradient(317deg, #a7a68f82 30%, #a7a68f9c 100%);
  box-shadow: 3px 4px 5px 0px #a09999;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  transition: box-shadow ease 300ms;
  opacity: ${({$opacity}) => $opacity};

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    display: block;
    width: 100%;
    height: 1.1em;
    margin: auto;
    text-align: center;
    color: #7a7a77;
    background: transparent;
    border-radius: 10px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid #7a7a77;
    background: linear-gradient(180deg, rgba(255, 255, 255, .25) 25%, rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, .75) 75%, rgba(255, 255, 255, 1) 100%);
  }

  &::after {
    content: '';
    width: 100%;
    height: 1.1em;
    position: absolute;
    bottom: 0px;
    display: block;
    background: transparent;
    border: 1px solid #7a7a77;
    border-radius: 10px;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: linear-gradient(0deg, rgba(255, 255, 255, .25) 25%, rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, .75) 75%, rgba(255, 255, 255, 1) 100%);
  }

  &:hover {
    ${({$dragged}) => $dragged ? 'box-shadow: 3px 4px 9px 0px #a09999' : ''}
  }

  &:active {
    ${({$dragged}) => $dragged ? 'background: linear-gradient(123deg, #474a51b5 30%, #a2a8b78a 100%);' : ''}

  }
`
