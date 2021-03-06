import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useToast,
  Heading,
} from '@chakra-ui/react';
import CustomCheckbox from '@components/CustomCheckbox';
import CustomInput from '@components/CustomInput';
import CustomSelect from '@components/CustomSelect';
import {signUp} from '@services/auth';
import createUserSerializer from '../../utils/createUserSerializer';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {brazilianStates} from 'src/constants/brazilianStates';
import {createUserResolver} from './resolvers/User/createUserResolver';

export default function CreateUserForm() {
  const router = useRouter();
  const toast = useToast();
  const methods = useForm({resolver: createUserResolver, mode: 'onChange'});

  const onSubmit = async (data: any) => {
    const serializedData = createUserSerializer(data);
    const {email, password} = serializedData;
    try {
      await signUp(serializedData, 'client');
      router.push('/');
      await signIn('credentials', {
        redirect: false,
        ...{email, password},
      });
      toast({
        status: 'success',
        title: 'Conta criada com sucesso!',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      onError();
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha ao cadastrar. Verifique os dados e tente novamente.',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    methods.reset();
  };

  return (
    <Flex
      bg="main"
      p={{base: '30px', md: '45px', lg: '60px'}}
      borderRadius="40px"
      gap={{base: '40px', md: '60px', lg: '140px'}}
      h={{base: 'auto', md: '600px'}}
      direction={{base: 'column', md: 'row'}}
    >
      <Flex
        direction="column"
        w={{base: '100%', md: '50%'}}
        h={{md: '100%'}}
        justify="space-between"
      >
        <Box h="90%">
          <Heading
            as="h2"
            fontSize={{base: '25px', md: '35px', lg: '55px'}}
            mb={{base: '15px', lg: '30px'}}
          >
            Encontre um lugar pra chamar de lar.
          </Heading>
          <Text
            fontSize={{base: '15px', md: '18px', lg: '20px'}}
            color="description"
          >
            Tenha acesso a toda a plataforma{' '}
            <span style={{fontWeight: 'bold'}}>gratuitamente</span> e encontre
            seu <span style={{fontWeight: 'bold'}}>im??vel dos sonhos.</span>
          </Text>
        </Box>
        <Text fontSize="23px" fontWeight="bold" justifySelf="flex-end" h="10%">
          #praVoc??
        </Text>
      </Flex>
      <SimpleGrid
        columns={{base: 1, md: 2}}
        spacing={{base: '20px', lg: '30px'}}
        w={{base: '100%', md: '50%'}}
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
            name="password"
            bgColor="input"
            placeholder="Senha..."
            title="Senha *"
            type="password"
          />
          <CustomInput
            name="cpf"
            bgColor="input"
            placeholder="CPF..."
            mask="999.999.999-99"
            title="CPF *"
          />
          <CustomSelect
            name="state"
            label="Seu estado *"
            placeholder="Seu estado..."
            options={brazilianStates}
            fontSize="18px"
          />
          <CustomCheckbox
            name="userTerms"
            label="Li e concordo com os Termos e Condi????es"
            mt="20px"
          />
          <Button
            w="100%"
            mt={{base: 0, md: '23px'}}
            pt="0"
            variant="primary"
            _hover={{bg: 'primaryBlue'}}
            type="submit"
            isDisabled={!methods.formState.isValid}
          >
            Cadastrar
          </Button>
        </FormProvider>
      </SimpleGrid>
    </Flex>
  );
}
