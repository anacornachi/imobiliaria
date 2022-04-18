import Container from '../../components/layout/Container';
import {
  Flex,
  Heading,
  Switch,
  FormLabel,
  useToast,
  Button,
} from '@chakra-ui/react';
import CustomInput from '../../components/Forms/CustomInput';
import {FormProvider, useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import {updateBrokerResolver} from '@components/Forms/resolvers/updateBrokerResolver';

export default function atualizarCorretor() {
  const toast = useToast();
  const methods = useForm({resolver: updateBrokerResolver, mode: 'onChange'});
  const router = useRouter();

  const onSubmit = async (data: any) => {
    // logica quando der o submit dos dados
    // fazer o put dos dados

    toast({
      status: 'success',
      title: 'Dados atualizados!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    router.push('/');
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha para atualizar. Tente novamente mais tarde!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Container>
      <Flex
        py={{base: '20px', lg: '60px'}}
        direction={{base: 'column', md: 'row'}}
        gap={{base: '35px', md: 0}}
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <FormProvider {...methods}>
          <Heading
            as="h2"
            fontSize={{base: '40px', md: '50px'}}
            color="title"
            textAlign={{base: 'center', md: 'left'}}
            maxW={{base: '100%', md: '40%'}}
          >
            Atualização do corretor
          </Heading>
          <Flex
            direction={{base: 'column'}}
            w={{base: '100%', lg: '60%'}}
            gap="30px"
          >
            <Flex
              wrap="wrap"
              w="100%"
              gap="30px"
              justify="space-between
            "
            >
              <CustomInput
                bgColor="main"
                name="name"
                title="Nome do corretor"
                w={{base: '100%', lg: '47%'}}
              />
              <CustomInput
                bgColor="main"
                name="cpf"
                title="CPF"
                w={{base: '100%', lg: '47%'}}
              />
              <CustomInput
                bgColor="main"
                name="creci"
                title="CRECI"
                w={{base: '100%', lg: '47%'}}
              />
              <Flex direction={{md: 'column'}} w={{base: '100%', md: '47%'}}>
                <FormLabel
                  htmlFor="isRequired"
                  as="h3"
                  fontSize="18px"
                  fontWeight="semibold"
                >
                  Status
                </FormLabel>
                <Switch
                  id="isRequired"
                  size="lg"
                  w={{base: '100%', md: '50%'}}
                />
              </Flex>
            </Flex>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Flex>
        </FormProvider>
      </Flex>
    </Container>
  );
}
