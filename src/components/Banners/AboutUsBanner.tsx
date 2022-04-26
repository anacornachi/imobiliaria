import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';
import bannerUs from '@public/assets/images/banner-us.png';

export default function AboutUsBanner() {
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
          Vamos construir juntos a inovação do ramo imobiliário
        </Heading>
        <Text fontSize={{base: '16px', md: '22px'}}>
          Conheça um pouco mais sobre os membros deste projeto inovador e
          conecte-se conosco.
        </Text>
      </Flex>
      <Box
        position="relative"
        d={{base: 'none', lg: 'flex'}}
        mt="40px"
        mb="40px"
      >
        <Image src={bannerUs} alt="" layout="intrinsic" />
      </Box>
    </Flex>
  );
}
