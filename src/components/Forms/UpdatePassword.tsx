import {
  Button,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import {FormProvider, useForm} from 'react-hook-form';

import CustomInput from '@components/CustomInput';
import {updatePasswordResolver} from './resolvers/updatePasswordResolver';

export default function UpdatePasswordForm() {
  const toast = useToast();
  const methods = useForm({resolver: updatePasswordResolver, mode: 'onChange'});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha ao atualizar os dados. Tente novamente mais tarde.',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <SimpleGrid
      columns={1}
      spacing="25px"
      as="form"
      onSubmit={methods.handleSubmit(onSubmit, onError)}
      border="1px"
      p="30px"
      borderRadius="20px"
    >
      <Heading as="h6" fontSize="18px" mb="20px">
        Alteração de senha:
      </Heading>
      <FormProvider {...methods}>
        <CustomInput
          name="actualPassword"
          bgColor="input"
          placeholder="Senha atual..."
          title="Senha atual *"
          type="password"
        />
        <CustomInput
          name="password"
          bgColor="input"
          placeholder="Nova senha..."
          title="Nova senha *"
          type="password"
        />
        <Button variant="primary" type="submit" w="100%" h="45px">
          Atualizar
        </Button>
      </FormProvider>
    </SimpleGrid>
  );
}
