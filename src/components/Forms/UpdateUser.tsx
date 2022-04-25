import {Button, SimpleGrid, useToast} from '@chakra-ui/react';
import CustomInput from '@components/CustomInput';
import {updateUser} from '@services/user';
import {FormProvider, useForm} from 'react-hook-form';
import {updateUserResolver} from './resolvers/updateUserResolver';

type Props = {
  defaultValues?: TUser;
};

export default function UpdateUserForm({defaultValues}: Props) {
  const toast = useToast();
  const methods = useForm({
    resolver: updateUserResolver,
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = async (userData: any) => {
    await updateUser(userData);
    toast({
      status: 'success',
      title: 'Dados atualizados com sucesso!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
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
      columns={2}
      spacing="40px"
      as="form"
      onSubmit={methods.handleSubmit(onSubmit, onError)}
    >
      <FormProvider {...methods}>
        <CustomInput
          name="firstName"
          bgColor="input"
          placeholder="Nome..."
          title="Nome *"
        />
        <CustomInput
          name="lastName"
          bgColor="input"
          placeholder="Sobrenome..."
          title="Sobrenome *"
        />
        <CustomInput
          name="email"
          bgColor="input"
          placeholder="Email..."
          title="Email *"
        />
        <CustomInput
          name="cpf"
          bgColor="input"
          placeholder="CPF..."
          title="CPF *"
          disabled={true}
        />
        <CustomInput
          name="city"
          bgColor="input"
          placeholder="Cidade..."
          title="Cidade *"
        />
        <Button variant="primary" type="submit" mt="28px" h="45px">
          Atualizar dados
        </Button>
      </FormProvider>
    </SimpleGrid>
  );
}
