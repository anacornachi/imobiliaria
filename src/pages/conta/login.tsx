import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import {FormProvider, useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import CustomInput from '@components/Forms/CustomInput';
import {loginResolver} from '@components/Forms/resolvers/loginResolver';

export default function Login() {
  const toast = useToast();
  const methods = useForm({resolver: loginResolver, mode: 'onChange'});
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const auth = (await signIn('credentials', {
      redirect: false,
      ...data,
    })) as any;
    if (auth?.error) {
      // Handle auth failed
      console.log('Auth failed', auth.error);
      toast({
        title: 'Falha no login',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        position: 'bottom-end',
      });
    } else {
      toast({
        status: 'success',
        title: 'Bem vindo!',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
      router.push('/');
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Senha/email inválidos. Tente novamente!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        align="center"
        justify="center"
        w="100%"
        py={{base: '40px', md: '110px'}}
      >
        <Flex
          w={{base: '100%', sm: '544px'}}
          bg="main"
          h="550px"
          align="center"
          direction="column"
          justify="center"
          p={{base: '10px', md: '50px'}}
          boxShadow="xl"
          as="form"
          borderRadius="40px"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <Heading as="h2" fontSize="32px">
            Login
          </Heading>
          <Text
            color="description"
            mb="27px"
            mt="10px"
            fontSize={{base: '14px', md: '17px'}}
          >
            Faça login com sua conta
          </Text>
          <FormProvider {...methods}>
            <Flex gap="15px" direction="column" w="100%">
              <CustomInput
                name="email"
                type="email"
                placeholder="E-mail"
                id="email"
                bgColor="input"
              />
              <CustomInput
                name="password"
                type="password"
                placeholder="Senha"
                id="password"
                bgColor="input"
              />
            </Flex>
            <Link href="/account/recover" passHref>
              <ChakraLink
                _hover={{color: 'primaryBlue'}}
                _focus={{boxShadow: 'none'}}
                color="description"
                alignSelf="start"
                mt="20px"
              >
                Esqueceu sua senha?
              </ChakraLink>
            </Link>
            <Button
              w="100%"
              mt={{base: '30px', md: '23px'}}
              pt="0"
              variant="primary"
              type="submit"
            >
              Entrar
            </Button>
          </FormProvider>
          <Link href="/account/register" passHref>
            <ChakraLink
              _hover={{color: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
            >
              Não tem uma conta? Cadastre-se aqui
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
