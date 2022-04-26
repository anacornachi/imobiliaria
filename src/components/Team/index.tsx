import {Box, Flex, Text, Link as ChakraLink, Heading} from '@chakra-ui/react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import ana from '@public/assets/images/ana.png';
import helena from '@public/assets/images/helena.png';
import ivan from '@public/assets/images/ivan.png';
import nadia from '@public/assets/images/nadia.png';
import sabrina from '@public/assets/images/sabrina.png';
import Container from '@components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';

export default function Team() {
  return (
    <>
      <Container>
        <Flex direction="column">
          <Flex ml="40px" alignSelf={{lg: 'start'}}>
            <Box>
              <Image src={ana} alt="ana" width="200px" height="200px" />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                Ana Cornachi
              </Heading>
              <Text ml="30px">Front End </Text>
              <Text ml="30px" mt="10px">
                React.js | Next.js | TypeScript | Node.js | Jest | Testing
                Library
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href="https://github.com/anacornachi" passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link href="https://www.linkedin.com/in/anacornachi/" passHref>
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
          <Flex ml="40px" alignSelf={{lg: 'end'}}>
            <Box>
              <Image src={helena} alt="helena" width="200px" height="200px" />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                Helena Machado
              </Heading>
              <Text ml="30px">Back End </Text>
              <Text ml="30px" mt="10px">
                Node.js | Express | JavaScript | Nest.js | SQL
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href="https://github.com/helena-machado" passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/helenamachadop/"
                  passHref
                >
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
          <Flex ml="40px" alignSelf={{lg: 'start'}}>
            <Box>
              <Image src={ivan} alt="ivan" width="200px" height="200px" />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                Ivan Geier
              </Heading>
              <Text ml="30px">Back End </Text>
              <Text ml="30px" mt="10px">
                Node.js | Nest.js | SQL | NoSQL | Express
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href="https://github.com/ivangeier" passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link href="https://www.linkedin.com/in/ivangeier/" passHref>
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
          <Flex ml="40px" alignSelf={{lg: 'end'}}>
            <Box>
              <Image src={nadia} alt="nadia" width="200px" height="200px" />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                Nádia Mizael
              </Heading>
              <Text ml="30px">Front End </Text>
              <Text ml="30px" mt="10px">
                JavaScript | TypeScript | React.js | HTML/CSS
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href="https://github.com/Nadiamizael" passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link href="https://www.linkedin.com/in/nadiamizael/" passHref>
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
          <Flex ml="40px" alignSelf={{lg: 'start'}}>
            <Box>
              <Image src={sabrina} alt="sabrina" width="200px" height="200px" />
            </Box>
            <Flex direction="column">
              <Heading
                as="h5"
                fontSize={{base: '15px', md: '15px', lg: '20px'}}
                top={{base: 5, md: 10}}
                w="100%"
                m="30px"
              >
                Sabrina Couto
              </Heading>
              <Text ml="30px">Full Stack </Text>
              <Text ml="30px" mt="10px">
                HTML | CSS | JavaScript | Bootstrap | MySQL | Node.js
              </Text>

              <Flex width="50px" justify="space-between" ml="30px" mt="15px">
                <Link href="https://github.com/sabrinacouto" passHref>
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsGithub />
                  </ChakraLink>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sabrinacoutolima/"
                  passHref
                >
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
        </Flex>
      </Container>
    </>
  );
}
