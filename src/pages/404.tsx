import {Button, Flex, Heading} from '@chakra-ui/react';
import Image from 'next/image';
import notFound from '@public/assets/images/not-found.svg';
import Container from '@components/layout/Container';
import {useRouter} from 'next/router';

export default function NotFound() {
  const router = useRouter();
  return (
    <Container>
      <Flex
        direction="column"
        align="center"
        py={{base: '30px', md: '50px'}}
        gap="30px"
      >
        <Image
          src={notFound}
          alt="error 404 - page not found"
          width="750px"
          height="400px"
        />
        <Heading
          as="h3"
          fontSize={{base: '16px', lg: '30px'}}
          textAlign="center"
        >
          A página solicitada não foi encontrada!
        </Heading>
        <Button variant="primary" onClick={() => router.push('/')}>
          Voltar para home
        </Button>
      </Flex>
    </Container>
  );
}
