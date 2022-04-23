import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
  Checkbox,
} from '@chakra-ui/react';
import Link from 'next/link';
import {FormProvider, useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import CustomInput from '@components/Forms/CustomInput';
import {realEstateRegisterResolver} from '@components/Forms/resolvers/realEstateRegisterResolver';

export default function register() {
  const toast = useToast();
  const methods = useForm({
    resolver: realEstateRegisterResolver,
    mode: 'onChange',
  });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const auth = (await signIn('credentials', {
      redirect: false,
      ...data,
    })) as any;
    if (auth?.error) {
      console.log('Auth failed', auth.error);
      toast({
        title: 'Falha no registro.',
        description: 'Por favor, verifique os dados e tente novamente.',
        status: 'error',
        position: 'bottom-end',
      });
    } else {
      toast({
        title: 'Usuário registrado!',
        position: 'bottom-right',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      router.push('/');
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Dados inválidos. Tente novamente!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        justifyContent="space-around"
        direction={{base: 'column', md: 'row'}}
        mx="30px"
        mb="30px"
      >
        <Flex direction="column" gap="30px" maxW={{base: '100%', md: '40%'}}>
          <Heading as="h2" mt="45px" fontSize={{base: '30px', md: '50px'}}>
            Encontre um lugar pra chamar de lar.
          </Heading>
          <Text mb={{base: '20px', lg: '0'}}>
            Tenha acesso a toda a plataforma gratuitamente e encontre seu imóvel
            dos sonhos.
          </Text>
        </Flex>
        <Flex
          w={{base: '100%', lg: '544px'}}
          bg="main"
          h={{base: '100%', lg: '600px'}}
          direction="column"
          justify="center"
          p={{base: '10px', lg: '50px'}}
          boxShadow="xl"
          as="form"
          borderRadius="40px"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <FormProvider {...methods}>
            <Flex
              gap="25px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
              pt={{base: '15px', sm: '0'}}
            >
              <CustomInput
                name="nome"
                placeholder="Digite seu nome..."
                title="Nome *"
                w="100%"
                bgColor="input"
              />
              <CustomInput
                name="lastName"
                placeholder="Digite seu sobrenome..."
                title="Sobrenome *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="email"
                placeholder="Digite seu email..."
                title="Email *"
                w="100%"
                bgColor="input"
              />

              <CustomInput
                name="password"
                placeholder="Digite sua senha..."
                title="Senha *"
                w="100%"
                type="password"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="cpf"
                placeholder="Digite seu CPF..."
                title="CPF *"
                w="100%"
                bgColor="input"
              />

              <CustomInput
                name="city"
                placeholder="Digite a sua cidade..."
                title="Sua Cidade *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex justifyContent="center" mb="20px">
              <Checkbox>Li e concordo com os Termos e Condições</Checkbox>
            </Flex>
            <Button w="100%" pt="0" variant="primary" type="submit">
              Cadastrar
            </Button>
          </FormProvider>
          <Link href="/conta/login" passHref>
            <ChakraLink
              _hover={{color: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
              textAlign="center"
            >
              Já tem uma conta? Faça login aqui
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-around"
        direction={{base: 'column', md: 'row'}}
        mt="100px"
        mx="30px"
        mb="30px"
      >
        <Flex direction="column" gap="30px" maxW={{base: '100%', md: '40%'}}>
          <Heading as="h2" mt="45px" fontSize={{base: '30px', md: '50px'}}>
            Quer ver seus imóveis aqui? Se inscreva.
          </Heading>
          <Text mb={{base: '20px', lg: '0'}}>
            Faça parte da maior empresa de imóveis do Brasil.
          </Text>
        </Flex>
        <Flex
          w={{base: '100%', lg: '544px'}}
          bg="main"
          h={{base: '100%', lg: '850px'}}
          direction="column"
          justify="center"
          p={{base: '10px', md: '50px'}}
          boxShadow="xl"
          as="form"
          borderRadius="40px"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <FormProvider {...methods}>
            <Flex
              gap="25px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
              pt={{base: '15px', sm: '0'}}
            >
              <CustomInput
                name="nome"
                placeholder="Digite seu nome..."
                title="Nome *"
                w="100%"
                bgColor="input"
              />
              <CustomInput
                name="lastName"
                placeholder="Digite seu sobrenome..."
                title="Sobrenome *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="email"
                placeholder="Digite seu email..."
                title="Email *"
                w="100%"
                bgColor="input"
              />

              <CustomInput
                name="password"
                placeholder="Digite sua senha..."
                title="Senha *"
                w="100%"
                type="password"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="cpf"
                placeholder="Digite seu CPF..."
                title="CPF *"
                w="100%"
                bgColor="input"
              />

              <CustomInput
                name="hasBrokers"
                placeholder="Sim"
                title="Já possui corretores? *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="realEstateName"
                placeholder="Digite o nome da sua empresa..."
                title="Empresa *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex
              gap="15px"
              direction="row"
              flexWrap={{base: 'wrap', lg: 'nowrap'}}
              mb="30px"
            >
              <CustomInput
                name="cnpj"
                placeholder="Digite seu CNPJ..."
                title="CNPJ *"
                w="100%"
                bgColor="input"
              />

              <CustomInput
                name="city"
                placeholder="Digite a sua cidade..."
                title="Sua Cidade *"
                w="100%"
                bgColor="input"
              />
            </Flex>
            <Flex justifyContent="center" mb="20px">
              <Checkbox>Li e concordo com os Termos e Condições</Checkbox>
            </Flex>
            <Button w="100%" pt="0" variant="primary" type="submit">
              Cadastrar
            </Button>
          </FormProvider>
          <Link href="/conta/login" passHref>
            <ChakraLink
              _hover={{color: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
              textAlign="center"
            >
              Já tem uma conta? Faça login aqui
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
