import {Box, Image, Heading} from '@chakra-ui/react';

export default function CustomCityHighlight() {
  return (
    <Box
      w={{base: '178px', md: '278px'}}
      h={{base: '272px', md: '426px'}}
      position="relative"
    >
      <Heading
        textAlign="center"
        position="absolute"
        as="h2"
        fontFamily="vietnam"
        fontSize={{base: '15px', md: '25px'}}
        top={{base: '5', md: '10'}}
        w="100%"
      >
        SÃO PAULO
      </Heading>

      <Image
        src="https://gife.org.br/wp/media/2019/12/saopaulo570.jpg"
        borderRadius="30px"
        w="100%"
        h="100%"
        objectFit="cover"
        alt="rio"
      />
    </Box>
  );
}
