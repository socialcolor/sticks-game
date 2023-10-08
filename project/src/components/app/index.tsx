import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import './style.css'
import Info from '../info';
import Stats from '../stats';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Info />
      <Stats />
    </ThemeProvider>
  )
}

export default App;
