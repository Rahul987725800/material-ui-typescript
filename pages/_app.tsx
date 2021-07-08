import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Material ui</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Code affection material ui"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
