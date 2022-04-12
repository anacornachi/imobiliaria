import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '@components/Header';
import Footer from '@components/Footer';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
