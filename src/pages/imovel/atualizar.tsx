import Container from '@components/layout/Container';
import CustomInput from '../../components/Forms/CustomInput';
import {Flex, Box, FormLabel, Heading, Textarea} from '@chakra-ui/react';
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
        justifyContent="space-between"
        direction={{base: 'column', md: 'row'}}
      >
        <Flex direction="column" gap="30px" w="50%">
          <FormProvider {...methods}>
            <CustomInput
              name="titulo"
              bgColor="main"
              title="Título principal"
              w={{base: '320px', md: '80%'}}
            />
          </FormProvider>

          <Flex gap="10px" w="450px">
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

          <Flex w="450px">
            <FormProvider {...methods}>
              <FormLabel htmlFor="localizaçao">
                <IoLocationOutline /> Localização
              </FormLabel>
              <CustomInput name="localizaçao" bgColor="main" w="200px" />
            </FormProvider>
          </Flex>

          <Flex w="450px">
            <FormProvider {...methods}>
              <Flex align="center" w="100%">
                <FormLabel htmlFor="corretor" mb="0">
                  Corretor:
                </FormLabel>
                <CustomInput name="corretor" bgColor="main" w="200px" />
              </Flex>
            </FormProvider>
          </Flex>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            w={{base: 'sm', md: 'md'}}
            p={{base: '10px', md: '20px'}}
            borderColor="title"
          >
            <Flex gap="15px" mb="10px">
              <FormProvider {...methods}>
                <Flex align="center">
                  <FormLabel htmlFor="aluguel" mb="0">
                    Aluguel:
                  </FormLabel>
                  <CustomInput
                    name="aluguel"
                    bgColor="main"
                    w={{base: '70px', md: '100px'}}
                    h="30px"
                  />
                </Flex>
                <Flex align="center">
                  <FormLabel htmlFor="condominio" mb="0">
                    Condomínio:
                  </FormLabel>
                  <CustomInput
                    name="condominio"
                    bgColor="main"
                    w={{base: '70px', md: '100px'}}
                    h="30px"
                  />
                </Flex>
              </FormProvider>
            </Flex>

            <Flex gap="15px" align="center ">
              <FormProvider {...methods}>
                <Flex align="center">
                  <FormLabel htmlFor="iptu" mb="0">
                    IPTU:
                  </FormLabel>

                  <CustomInput
                    name="iptu"
                    bgColor="main"
                    w={{base: '70px', md: '100px'}}
                    h="30px"
                  />
                </Flex>

                <Flex align="center">
                  <FormLabel htmlFor="compra" mb="0">
                    Compra:
                  </FormLabel>
                  <CustomInput
                    name="compra"
                    bgColor="main"
                    w={{base: '70px', md: '100px'}}
                    h="30px"
                  />
                </Flex>
              </FormProvider>
            </Flex>
          </Box>
        </Flex>

        <Flex
          direction="column"
          gap="10px"
          mt="40px"
          w={{base: '400px', md: '50%'}}
        >
          <Heading as="h2" fontSize="20px" textAlign="center">
            Detalhes do imóvel
          </Heading>
          <Textarea
            bg="main"
            w="100%"
            h="100%"
            resize="none"
            borderRadius="30px"
          />
        </Flex>
      </Flex>

      <Flex mt="20px" mb="20px" w={{base: '400px', md: '100%'}}>
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
