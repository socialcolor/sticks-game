import { styled } from 'styled-components';

export const Button = styled('button')`
    display: block;
    text-align: center;
    background-color: rgba(210, 210, 198, 0.5);
    border: 1px solid #858484;
    border-radius: 10px;
    font-size: 14px;
    text-transform: uppercase;
    padding: 3px 10px;
    box-shadow: 2px 3px 2px 0px #858484;
    margin: 10px auto;
    transition: all ease-in 200ms;

    &:hover {
      background-color: rgba(210, 210, 198, 0.9);
    }

    &:active {
      box-shadow: inset 2px 3px 2px 0px #858484;
    }
`
