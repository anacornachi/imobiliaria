import Container from '../../components/layout/Container';
import {Heading, Flex} from '@chakra-ui/react';
import Overview from '@components/Overview';

export default function admin() {
  return (
    <>
      <Container>
        <Heading as="h2" mb="30px">
          Administrativo
        </Heading>

        <Flex
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-around"
          gap="10px"
          mb="30px"
        >
          <Overview title="Imóveis cadastrados" data="250" />
          <Overview title="Corretores cadastrados" data="34" />
          <Overview title="Valor em imóveis" data="240" />
        </Flex>
      </Container>
    </>
  );
}
