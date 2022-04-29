import {
  Heading,
  Flex,
  Box,
  Button,
  Stack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import Image from 'next/image';
import casa from '@public/assets/images/casa.png';
import casinha from '@public/assets/images/casinha.png';
import logo from '@public/assets/images/logo.png';
import {IoBedOutline} from 'react-icons/io5';
import {MdDirectionsCar} from 'react-icons/md';
import {IoLocationOutline} from 'react-icons/io5';
import {FaShower} from 'react-icons/fa';

export default function PropertyId() {
  return (
    <Container>
      <Box w="100%" bg="main" borderRadius="40px" py="60px">
        <Flex direction={{base: 'column', md: 'row'}}>
          <Box>
            <Flex direction="column">
              <Flex mx="50px">
                <Image src={casa} alt="" />
              </Flex>
              <Flex gap="30px" mt="25px" mx="50px">
                <Image src={casinha} alt="" />
                <Image src={casinha} alt="" />
                <Image src={casinha} alt="" />
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex direction="column" gap="70px">
              <Heading
                fontSize={{base: '30px', md: '50px'}}
                textAlign={{base: 'center', md: 'start'}}
              >
                Casa grande para 3 familias
              </Heading>
              <Flex
                gap={{base: '30px', md: '50px'}}
                color="secondary"
                px={{base: '30px', md: '0'}}
              >
                <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                  <IoBedOutline />
                  10 quartos
                </Heading>
                <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                  <FaShower />5 banheiros
                </Heading>
                <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                  <MdDirectionsCar /> 3 vagas
                </Heading>
                <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                  <IoLocationOutline /> Curitiba, Brasil
                </Heading>
              </Flex>
            </Flex>
            <Flex
              justify="space-between"
              direction={{base: 'column', md: 'row'}}
              alignItems="center"
              py="30px"
            >
              <Flex
                direction={{base: 'row', md: 'column'}}
                py={{base: '20px', md: '0'}}
              >
                <Stack
                  direction={{base: 'row', md: 'column'}}
                  gap={{base: '80px', md: '25px'}}
                >
                  <Avatar size="lg" src="https://bit.ly/broken-link" />
                  <Avatar size="lg" src="https://bit.ly/broken-link" />
                </Stack>
              </Flex>
              <Box>
                <Stack
                  direction={{base: 'row', md: 'column'}}
                  gap={{base: '10px', md: '80px'}}
                  color="secondary"
                  fontSize="16px"
                  fontWeight="semibold"
                >
                  <Text>Corretor do imóvel</Text>
                  <Text> Imobiliária do imóvel</Text>
                </Stack>
              </Box>

              <Flex
                direction={{base: 'column', md: 'column'}}
                gap="15px"
                justify="space-between"
                py={{base: '20px', md: '0'}}
                mx="50px"
              >
                <Button variant="primary">Fale com o corretor</Button>
                <Button variant="secondary">Quero visitar</Button>
                <Button variant="share">Compartilhar</Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Flex
        justify="space-between"
        py="60px"
        direction={{base: 'column', md: 'row'}}
      >
        <Stack direction="column" gap="20px" w={{base: '100%', md: '40%'}}>
          <Heading>Detalhes do imóvel</Heading>
          <Text color="secondary" fontSize="22px" fontWeight="semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Stack>
        <Box border="1px" borderColor="input" h="100px" w="100px">
          <Flex></Flex>
        </Box>
        <Box
          px="20px"
          mt={{base: '10px', md: '60px'}}
          paddingTop="60px"
          borderWidth="1px"
          borderRadius="15px"
          borderColor="black"
          overflow="hidden"
        >
          <Flex gap="85px">
            <Image src={logo} alt="" />
            <Button variant="primary">Fale com o corretor</Button>
          </Flex>
          <Flex py="30px" justify="space-between">
            <Flex direction="column" gap="25px">
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                Aluguel:
              </Heading>
              <Text>R$7.000,00</Text>
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                Condomínio:
              </Heading>
              <Text>R$300,00</Text>
            </Flex>
            <Flex gap="25px" direction="column">
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                IPTU:
              </Heading>
              <Text>R$2.300,00</Text>
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}}>
                Compra:
              </Heading>
              <Text>R$2.800.000,00</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
