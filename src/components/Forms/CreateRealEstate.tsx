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
import createUserSerializer from '@utils/createUserSerializer';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {brazilianStates} from 'src/constants/brazilianStates';
import {yesOrNoOption} from 'src/constants/yesOrNo';
import {createRealEstateResolver} from './resolvers/createRealEstateResolver';

export default function CreateRealEstateForm() {
  const router = useRouter();
  const toast = useToast();
  const methods = useForm({
    resolver: createRealEstateResolver,
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    const serializedData = createUserSerializer(data);
    const {email, password} = serializedData;
    try {
      await signUp(serializedData, 'realEstate');
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
      gap={{base: '40px', md: '60px', lg: '100px'}}
      h="auto"
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
            Quer ver seus imóveis aqui? Se inscreva.
          </Heading>
          <Text
            fontSize={{base: '15px', md: '18px', lg: '20px'}}
            color="description"
          >
            Faça parte da maior empresa de imóveis do Brasil.
          </Text>
        </Box>
        <Text fontSize="23px" fontWeight="bold" justifySelf="flex-end" h="10%">
          #praImobiliária
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
            name="name"
            bgColor="input"
            placeholder="Sua empresa..."
            title="Nome da empresa *"
            borderRadius="2px"
          />
          <CustomInput
            name="cnpj"
            bgColor="input"
            placeholder="CNPJ..."
            mask="99.999.999/9999-99"
            title="CNPJ *"
          />
          <CustomSelect
            name="initialBroker"
            label="Já possui corretores? *"
            placeholder="Selecione..."
            options={yesOrNoOption}
            fontSize="18px"
            mb="7px"
          />
          <CustomInput
            name="initialProperties"
            bgColor="input"
            type="number"
            placeholder="Ex.: 1"
            title="Quantos imóveis possui? *"
          />
          <CustomInput
            name="firstName"
            bgColor="input"
            placeholder="Nome..."
            title="Nome do admin *"
          />
          <CustomInput
            name="lastName"
            bgColor="input"
            placeholder="Sobrenome..."
            title="Sobrenome do admin *"
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
            title="CPF do admin *"
          />
          <CustomSelect
            name="state"
            label="Seu estado *"
            placeholder="Seu estado..."
            options={brazilianStates}
            fontSize="18px"
          />
          <CustomCheckbox
            name="realEstateTerms"
            label="Li e concordo com os Termos e Condições"
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
