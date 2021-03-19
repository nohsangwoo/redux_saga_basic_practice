import CounterContainer from './containers/CounterContainer';
import { ThemeProvider } from 'styled-components';
import Theme from './Styles/Theme';
import GlobalStyles from './Styles/GlobalStyles';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CounterContainer />
    </ThemeProvider>
  );
}

export default App;
