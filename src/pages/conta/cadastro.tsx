import {Flex} from '@chakra-ui/react';
import CreateRealEstateForm from '@components/Forms/CreateRealEstate';
import CreateUserForm from '@components/Forms/CreateUser';
import Container from '@components/layout/Container';

export default function Cadastro() {
  return (
    <Container py="20px">
      <Flex direction="column" gap="30px">
        <CreateUserForm />
        <CreateRealEstateForm />
      </Flex>
    </Container>
  );
}
