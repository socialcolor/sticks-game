import { styled } from 'styled-components';

export const Section = styled('section')`
  width: 100%;
  max-width: 750px;
  margin: 30px auto;
  font-family: ${({theme}) => theme.fonts.openSans};
  text-align: center;
`
export const Title = styled('h1')`
 font-size: 22px;
  font-weight: bold;
  font-family: 'open-sans', 'arial', 'helvetica', sans-serif;
  text-transform: uppercase;
`
export const Description = styled('p')`
  font-size: 16px;
`
