import {Heading, Text, Button, Flex, Checkbox, Box} from '@chakra-ui/react';
import CustomInput from '@components/Forms/CustomInput';
import Container from '@components/layout/Container';

export default function Register() {
  return (
    <Container>
      <Box bg="main" borderRadius="20px" mb="40px">
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
            <Text>
              Tenha acesso a toda a plataforma gratuitamente e encontre seu
              imóvel dos sonhos.
            </Text>
          </Flex>

          <Flex direction="column" mt="50px" gap="15px">
            <CustomInput
              name="nome"
              placeholder="Digite seu nome..."
              title="Nome *"
              w="100%"
            />

            <CustomInput
              name="email"
              placeholder="Digite seu email..."
              title="Email *"
              w="100%"
            />

            <CustomInput
              name="cpf"
              placeholder="Digite seu cpf..."
              title="Cpf *"
              w="100%"
            />
          </Flex>

          <Flex direction="column" mt="50px" gap="15px">
            <CustomInput
              name="nome"
              placeholder="Digite seu sobrenome..."
              title="Sobrenome *"
              w="100%"
            />

            <CustomInput
              name="password"
              placeholder="Digite sua senha..."
              title="Senha *"
              w="100%"
              type="password"
            />

            <CustomInput
              name="cidade"
              placeholder="Selecione a sua cidade..."
              title="Sua Cidade *"
              w="100%"
            />
          </Flex>
        </Flex>

        <Flex
          justifyContent={{base: 'center', md: 'flex-end'}}
          mr={{base: '0', md: '300px'}}
          mb="40px"
        >
          <Checkbox defaultChecked>
            Li e concordo com os Termos e Condições
          </Checkbox>
        </Flex>

        <Flex
          direction={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          mx="40px"
          align={{base: 'center', md: 'none'}}
        >
          <Text fontWeight="bold">#pravocê</Text>

          <Button
            variant="primary"
            type="submit"
            mr={{base: '10px', md: '250px'}}
            mb="40px"
          >
            Cadastrar
          </Button>
        </Flex>
      </Box>

      <Box bg="main" borderRadius="20px" mb="40px">
        <Flex
          justifyContent="space-around"
          direction={{base: 'column', md: 'row'}}
          mx="30px"
          mb="30px"
        >
          <Flex direction="column" gap="30px" maxW={{base: '100%', md: '40%'}}>
            <Heading as="h2" mt="45px" fontSize={{base: '30px', md: '50px'}}>
              Quer ver seus imóveis aqui? Se inscreva.
            </Heading>
            <Text>Faça parte da maior empresa de imóveis do Brasil.</Text>
          </Flex>
          <Flex direction="column" mt="50px" gap="15px" mr="90px">
            <Flex>
              <CustomInput
                name="nome"
                placeholder="Digite o nome da empresa..."
                title="Nome da sua empresa *"
                w="100%"
              />
            </Flex>

            <Flex gap="30px" direction={{base: 'column', md: 'row'}}>
              <CustomInput
                name="cnpj"
                placeholder="Digite seu CNPJ..."
                title="Seu CNPJ *"
                w="100%"
              />

              <CustomInput
                name="cidade"
                placeholder="Cidade..."
                title="Cidade *"
                w="100%"
              />
            </Flex>

            <Flex>
              <CustomInput
                name="corretores"
                placeholder="Responda aqui..."
                title="Já possui corretores? *"
                w={{base: '100%', md: '50%'}}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          mx="40px"
          align={{base: 'center', md: 'none'}}
        >
          <Text fontWeight="bold">#praImobiliária</Text>

          <Button
            variant="primary"
            type="submit"
            mr={{base: '10px', md: '250px'}}
            mb="40px"
          >
            Cadastrar
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
