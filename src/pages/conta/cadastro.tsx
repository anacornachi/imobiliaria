import {Heading} from '@chakra-ui/react';
import CustomInput from '@components/Forms/CustomInput';
import Container from '@components/layout/Container';
import {AiFillAlert} from 'react-icons/ai';

export default function Cadastro() {
  return (
    <Container>
      <CustomInput
        name="exemplo"
        placeholder="teste"
        title="Titulo"
        // type="password"
        leftIcon={<AiFillAlert />}
        // disabled={true}
        w="100%"
      />
    </Container>
  );
}
