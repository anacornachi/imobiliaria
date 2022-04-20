import Container from '@components/layout/Container';
import CustomInput from '../../components/Forms/CustomInput';
import {Flex, Box, FormLabel, Heading} from '@chakra-ui/react';
import {IoBedOutline} from 'react-icons/io5';
import {MdDirectionsCar} from 'react-icons/md';
import {IoLocationOutline} from 'react-icons/io5';
import {FaShower} from 'react-icons/fa';
import {useForm, FormProvider} from 'react-hook-form';
import Image, {StaticImageData} from 'next/image';
import imgTeste from '@public/images/imgTeste.png';

export default function propertyUpdate() {
  const methods = useForm();
  return (
    <Container>
      <Flex
        justifyContent="space-around"
        direction={{base: 'column', md: 'row'}}
      >
        <Flex direction="column" gap="30px">
          <FormProvider {...methods}>
            <CustomInput
              name="titulo"
              bgColor="main"
              title="Título principal"
              w="100%"
            />
          </FormProvider>

          <Flex gap="10px">
            <FormProvider {...methods}>
              <FormLabel htmlFor="quartos">
                <IoBedOutline /> Quartos
              </FormLabel>
              <CustomInput name="quartos" bgColor="main" w="50px" />

              <FormLabel htmlFor="banheiros">
                <FaShower /> Banheiros
              </FormLabel>
              <CustomInput name="banheiros" bgColor="main" w="50px" />

              <FormLabel htmlFor="vagas">
                <MdDirectionsCar /> Vagas
              </FormLabel>
              <CustomInput name="vagas" bgColor="main" w="50px" />
            </FormProvider>
          </Flex>

          <Flex>
            <FormProvider {...methods}>
              <FormLabel htmlFor="localizaçao">
                <IoLocationOutline /> Localização
              </FormLabel>
              <CustomInput name="localizaçao" bgColor="main" w="200px" />
            </FormProvider>
          </Flex>

          <Flex>
            <FormProvider {...methods}>
              <FormLabel htmlFor="corretor">Corretor</FormLabel>
              <CustomInput name="corretor" bgColor="main" w="200px" />
            </FormProvider>
          </Flex>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            maxW="lg"
            p="20px"
            borderColor="title"
          >
            <Flex gap="15px" mb="10px">
              <FormProvider {...methods}>
                <FormLabel htmlFor="aluguel">Aluguel:</FormLabel>
                <CustomInput name="aluguel" bgColor="main" w="100px" h="30px" />

                <FormLabel htmlFor="condominio">Condomínio:</FormLabel>
                <CustomInput
                  name="condominio"
                  bgColor="main"
                  w="100px"
                  h="30px"
                />
              </FormProvider>
            </Flex>

            <Flex gap="15px">
              <FormProvider {...methods}>
                <FormLabel htmlFor="iptu">IPTU:</FormLabel>
                <CustomInput name="iptu" bgColor="main" w="100px" h="30px" />
                <FormLabel htmlFor="compra">Compra:</FormLabel>
                <CustomInput name="compra" bgColor="main" w="100px" h="30px" />
              </FormProvider>
            </Flex>
          </Box>
        </Flex>

        <Flex direction="column" w="40%" gap="10px" mt="40px">
          <Heading as="h2" fontSize="20px" textAlign="center">
            Detalhes do imóvel
          </Heading>
          <Box bg="main" h="80%" borderRadius="40px" p="20px">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Box>
        </Flex>
      </Flex>

      <Flex mt="20px" mb="20px" mx="80px">
        <Box bg="main" p="20px" borderRadius="20px">
          <Flex justifyContent="space-around" gap="15px">
            <Image src={imgTeste} alt="casa" />
            <Image src={imgTeste} alt="casa" />
            <Image src={imgTeste} alt="casa" />
            <Image src={imgTeste} alt="casa" />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
