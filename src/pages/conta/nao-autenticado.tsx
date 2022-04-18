import {Button, Flex, Heading} from '@chakra-ui/react';
import {useRouter} from 'next/router';

export default function naoAutenticado() {
  const router = useRouter();
  return (
    <>
      <Flex
        align="center"
        justify="center"
        w="100%"
        py={{base: '40px', md: '110px'}}
        direction="column"
        gap="40px"
        h={{base: '400px', lg: '590px'}}
      >
        <Heading
          color="description"
          mb="27px"
          mt="10px"
          fontSize={{base: '30px', md: '40px'}}
          textAlign="center"
        >
          Essa é uma área restrita. 🔒
        </Heading>
        <Button
          variant="secondary"
          onClick={() => router.push('/conta/login')}
          w={{base: '100%', lg: '20%'}}
        >
          Fazer login
        </Button>
        <Button
          onClick={() => router.push('/')}
          variant="primary"
          w={{base: '100%', lg: '20%'}}
        >
          Voltar para home
        </Button>
      </Flex>
    </>
  );
}
