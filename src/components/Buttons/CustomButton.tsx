import {Button, Flex} from '@chakra-ui/react';

export default function CustomButton() {
  return (
    <Flex direction="column" gap="15px" alignItems="center">
      <Button
        bg="primaryBlue"
        color="#FFFFFF"
        w={{base: '100px', md: '280px'}}
        h={{base: '40px', md: '60px'}}
        fontSize={{base: '8px', md: '15px'}}
        fontFamily="vietnam"
        borderRadius="15px"
        _hover={{
          bg: 'primaryBlue',
        }}
      >
        Falar com o corretor
      </Button>

      <Button
        bg="light"
        color="primaryBlue"
        w={{base: '100px', md: '280px'}}
        h={{base: '40px', md: '60px'}}
        fontSize={{base: '8px', md: '15px'}}
        fontFamily="vietnam"
        borderRadius="15px"
        border="2px"
        borderColor="primaryBlue"
        _hover={{
          bg: 'light',
        }}
      >
        Quero visitar
      </Button>

      <Button
        bg="light"
        color="share"
        w={{base: '100px', md: '280px'}}
        h={{base: '40px', md: '60px'}}
        fontSize={{base: '8px', md: '15px'}}
        fontFamily="vietnam"
        borderRadius="15px"
        border="2px"
        borderColor="share"
        _hover={{
          bg: 'light',
        }}
      >
        Compartilhar
      </Button>

      <Button
        bg="light"
        color="delete"
        w={{base: '100px', md: '280px'}}
        h={{base: '40px', md: '60px'}}
        fontSize={{base: '8px', md: '15px'}}
        fontFamily="vietnam"
        borderRadius="15px"
        border="2px"
        borderColor="delete"
        _hover={{
          bg: 'light',
        }}
      >
        Deletar minha conta
      </Button>
    </Flex>
  );
}
