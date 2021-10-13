import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
