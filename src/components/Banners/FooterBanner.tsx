import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';
import building from '@public/assets/images/building.png';

export default function FooterBanner() {
  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      bgGradient="linear(180deg, #C3DFED 0%, #DFF0F7 100%)"
      borderRadius="40px"
      justify={{base: 'space-between'}}
    >
      <Flex
        direction="column"
        px={{base: '10px', lg: '80px'}}
        w={{base: '100%', lg: '60%'}}
        gap="20px"
        justify="center"
        py="60px"
      >
        <Heading as="h4" fontSize={{base: '22px', md: '54px', lg: '44px'}}>
          Encontre sua melhor imobiliária
        </Heading>
        <Text fontSize={{base: '16px', md: '22px'}}>
          Nós contamos com um serviço completo de venda ou aluguel de imóveis em
          todo o Brasil
        </Text>
        <Button
          variant="primary"
          mt={{base: '10px', md: '30px'}}
          w={{base: '100%', sm: '50%'}}
        >
          Entre em contato
        </Button>
      </Flex>
      <Box position="relative" d={{base: 'none', lg: 'flex'}} mt="40px">
        <Image src={building} alt="" layout="intrinsic" />
      </Box>
    </Flex>
  );
}
