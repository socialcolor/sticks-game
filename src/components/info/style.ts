import { styled } from 'styled-components';

export const Section = styled('section')`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  font-family: ${({theme}) => theme.fonts.openSans};
  text-align: center;
`
export const Title = styled('h1')`
  font-size: 22px;
  font-weight: bold;
  font-family: 'open-sans', 'arial', 'helvetica', sans-serif;
  text-transform: uppercase;
  margin: 15px auto;
`
export const Description = styled('p')`
  font-size: 16px;
  margin: 15px auto;
`
