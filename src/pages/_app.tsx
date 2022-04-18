import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '@components/Header';
import Footer from '@components/Footer';
import {SessionProvider} from 'next-auth/react';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
