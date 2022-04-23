import {Heading, Flex, Button, Box} from '@chakra-ui/react';
import CustomInput from '@components/Forms/CustomInput';
import {useForm, FormProvider} from 'react-hook-form';
import Container from '../../components/layout/Container';

export default function atualizarUser() {
  const methods = useForm();
  return (
    <Container>
      <Box bg="main" borderRadius="20px" mb="40px" p="40px">
        <Flex
          justifyContent="space-between"
          direction={{base: 'column', md: 'row'}}
        >
          <Flex direction="column" gap="30px" w={{base: '100%', md: '30%'}}>
            <Heading as="h2">Minha conta</Heading>
            <FormProvider {...methods}>
              <CustomInput
                name="nome"
                bgColor="light"
                placeholder="Digite seu nome..."
                title="Nome *"
                w={{base: '100%', md: '80%'}}
              />
              <CustomInput
                name="email"
                bgColor="light"
                placeholder="Digite seu email..."
                title="Email *"
                w={{base: '100%', md: '80%'}}
              />
              <CustomInput
                name="cidade"
                bgColor="light"
                placeholder="cidade..."
                title="Sua cidade *"
                w={{base: '100%', md: '80%'}}
              />
            </FormProvider>
          </Flex>

          <Flex
            direction="column"
            gap="30px"
            mt="73px"
            w={{base: '100%', md: '50%'}}
          >
            <FormProvider {...methods}>
              <CustomInput
                name="sobrenome"
                bgColor="light"
                placeholder="Digite seu sobrenome..."
                title="Sobrenome *"
                w={{base: '100%', md: '60%'}}
              />
              <CustomInput
                name="cpf"
                bgColor="light"
                placeholder="Digite seu cpf..."
                title="CPF *"
                w={{base: '100%', md: '60%'}}
              />
              <Button
                variant="primary"
                type="submit"
                mt="15px"
                maxW={{base: '80%', md: 'none'}}
              >
                Atualizar dados
              </Button>
            </FormProvider>
          </Flex>

          <Box
            borderWidth="1px"
            borderColor="title"
            borderRadius="lg"
            p="15px"
            mt="40px"
            w={{base: '100%', md: '20%'}}
          >
            <Flex direction="column" gap="30px">
              <Heading
                as="h2"
                fontSize={{base: '15px', md: '20px'}}
                textAlign="center"
              >
                Alteração de senha:
              </Heading>

              <FormProvider {...methods}>
                <CustomInput
                  name="password"
                  type="password"
                  bgColor="light"
                  placeholder="senha atual..."
                  title="Senha atual *"
                />
                <CustomInput
                  name="newPassword"
                  type="password"
                  bgColor="light"
                  placeholder="nova senha..."
                  title="Nova senha *"
                />
              </FormProvider>
              <Button variant="primary" type="submit" w="100%">
                Atualizar
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Flex justify="flex-end" mt="60px">
          <Button variant="delete" type="submit">
            Deletar minha conta
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
