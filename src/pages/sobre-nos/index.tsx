import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import AboutUsBanner from '@components/Banners/AboutUsBanner';
import Team from '@components/Team';

export default function AboutUs() {
  return (
    <>
      <Container>
        <AboutUsBanner />
        <Flex>
          <Heading
            textAlign="center"
            as="h4"
            fontSize={{base: '20px', md: '20px', lg: '30px'}}
            top={{base: 5, md: 10}}
            w="100%"
            py={{base: '30px', md: '60px'}}
          >
            Nosso Time
          </Heading>
        </Flex>
        <Team />
      </Container>
    </>
  );
}
