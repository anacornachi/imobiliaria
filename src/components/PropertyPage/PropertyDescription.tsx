import {Button, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '@public/assets/images/logo.png';
import convertToBRL from '@utils/convertToBRL';

type Props = {
  data: TProperty | undefined;
};

export default function PropertyDescription({data}: Props) {
  return (
    <Flex
      justify="space-between"
      py={{base: '60px', lg: '100px'}}
      direction={{base: 'column', md: 'row'}}
      gap={{base: '20px', lg: '60px'}}
    >
      <Flex direction="column" gap="20px" w={{base: '100%', md: '50%'}}>
        <Heading as="h4" fontSize={{lg: '40px'}}>
          Detalhes do imóvel
        </Heading>
        <Text
          color="secondary"
          fontSize={{base: '15px', lg: '20px'}}
          fontWeight="semibold"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>
      <Flex
        direction="column"
        p={{base: '20px', lg: '40px'}}
        border="1px"
        borderRadius="15px"
        borderColor="black"
        gap={{base: '40px', lg: '60px'}}
        w={{base: '100%', md: '50%'}}
      >
        <Flex
          gap={{base: '20px', lg: '85px'}}
          direction={{base: 'column', md: 'row'}}
          justify="center"
          align="center"
          w="100%"
        >
          <Image src={logo} alt="" layout="fixed" />
          <Button
            variant="primary"
            w={{base: '100%', md: '50%'}}
            fontSize="15px"
          >
            Fale com o corretor
          </Button>
        </Flex>
        <SimpleGrid
          columns={{base: 1, sm: 2, md: 1, lg: 2}}
          spacingX={{sm: '30px'}}
          gap="15px"
        >
          <Flex align="center" justify="space-between">
            <Heading as="h6" fontSize={{base: '18px', md: '20px'}}>
              Aluguel:
            </Heading>
            <Text ml="5px" fontSize={{base: '15px', md: '20px'}}>
              {convertToBRL(data?.valueRental)}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between">
            <Heading as="h6" fontSize={{base: '18px', md: '20px'}}>
              Condomínio:
            </Heading>
            <Text ml="5px" fontSize={{base: '15px', md: '20px'}}>
              {convertToBRL(data?.valueCondominium)}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between">
            <Heading as="h6" fontSize={{base: '18px', md: '20px'}}>
              IPTU:
            </Heading>
            <Text ml="5px" fontSize={{base: '15px', md: '20px'}}>
              {convertToBRL(data?.iptu)}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between">
            <Heading as="h6" fontSize={{base: '18px', md: '20px'}}>
              Compra:
            </Heading>
            <Text ml="5px" fontSize={{base: '15px', md: '20px'}}>
              {convertToBRL(data?.valueSell)}
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
