import {Box, Flex, Text, Link as ChakraLink, Heading} from '@chakra-ui/react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Container from '@components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import {teamData} from './teamData';

export default function Team() {
  return (
    <Container>
      <Flex direction="column" gap="60px" py={{base: '20px', md: '60px'}}>
        {teamData.map((contributor, key) => (
          <Flex
            key={contributor.name}
            justify={{
              base: 'flex-start',
              md: key % 2 == 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <Box>
              <Image
                src={contributor.image}
                alt={contributor.name}
                width="200px"
                height="200px"
              />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                {contributor.name}
              </Heading>
              <Text ml="30px">{contributor.focusIn}</Text>
              <Text ml="30px" mt="10px">
                {contributor.technologies}
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href={contributor.github} passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link href={contributor.linkedin} passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsLinkedin />
                  </ChakraLink>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}
