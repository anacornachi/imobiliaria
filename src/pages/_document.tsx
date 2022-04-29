import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Projeto desenvolvido para avaliação do módulo 5 - Resilia Educação"
        />
        <title>Imobiliária - Resilia</title>

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
