import styled, { keyframes } from 'styled-components';

const gradientChange = keyframes`
  0% {
    background: linear-gradient(317deg, #a7a68f82 30%, #a7a68f9c 100%);
  }
  20% {
    background: linear-gradient(305deg, #8d8c7e82 30%, #95958a9c 100%);
  }
  40% {
    background: linear-gradient(293deg, #7b7c7482 30%, #8a8c859c 100%);
  }
  60% {
    background: linear-gradient(261deg, #63676a82 30%, #7982859c 100%);
  }
  80% {
    background: linear-gradient(202deg, #52585b82 30%, #717a7e9c 100%);
  }
  100% {
    background: linear-gradient(123deg, #474a51b5 30%, #a2a8b78a 100%);
  }
`;
export const Stick = styled('li')<{$opacity: string}>`
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
    box-shadow: 3px 4px 9px 2px #a09999;
  }

  &:active {
    animation: ${gradientChange} ease 150ms;
    background: linear-gradient(123deg, #474a51b5 30%, #a2a8b78a 100%);
  }
`
