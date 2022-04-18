import Container from '../../components/layout/Container';
import {Button, Heading, Flex} from '@chakra-ui/react';
import Overview from '@components/Overview';

export default function index() {
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
          <Overview title="Imobiliárias cadastradas" data="250" />
          <Overview title="Cadastros nos últimos 7 dias" data="34%" />
          <Overview title="Gestão de imobiliárias" data="" />
        </Flex>

        <Flex
          align={{base: 'center', md: 'none'}}
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-around"
          mb="30px"
        >
          <Button variant="primary" mt="10px" mb="30px">
            Adicionar administrador
          </Button>
          <Button variant="primary" mt="10px" mb="30px">
            Atualizar administrador
          </Button>
          <Button variant="primary" mt="10px" mb="30px">
            Remover administrador
          </Button>
        </Flex>
      </Container>
    </>
  );
};
