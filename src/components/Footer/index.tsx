import {Box, Flex, Text, Link as ChakraLink, Heading} from '@chakra-ui/react';
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs';
import logo from '@public/images/logo.png';
import Image from 'next/image';
import Container from '@components/layout/Container';
import {navigation} from './navigation';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <Container>
        <Flex
          h={{base: 'auto', md: '330px'}}
          direction={{base: 'column', md: 'row'}}
          justify="space-between"
          align={{base: 'center'}}
          py="40px"
          gap={{base: '30px', md: '0'}}
        >
          <Flex
            direction="column"
            align={{base: 'center', md: 'flex-start'}}
            w={{base: '100%', md: '50%'}}
            gap="30px"
            order={{base: 2, md: -1}}
          >
            <Box position="relative" width="182px" height="52px">
              <Image src={logo} alt="logo" layout="fixed" />
            </Box>
            <Text
              color="secondary"
              fontSize="sm"
              maxW={{base: '100%', md: '60%'}}
            >
              Esse projeto tem por objetivo avaliação final do curso Resilia -
              Formação Full Stack.
            </Text>
            <Text color="secondary" fontSize="sm">
              * Não somos uma imobiliária de verdade.
            </Text>
            <Flex
              direction="column"
              align={{base: 'center', md: 'flex-start'}}
              w={{base: '100%', md: '50%'}}
              rowGap="30px"
            >
              <Flex width="150px" justify="space-between">
                <Link href="/">
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsFacebook />
                  </ChakraLink>
                </Link>
                <Link href="/">
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsTwitter />
                  </ChakraLink>
                </Link>
                <Link href="/">
                  <ChakraLink
                    color="title"
                    _hover={{color: 'primaryBlue'}}
                    _focus={{boxShadow: 'none'}}
                    target="_blank"
                  >
                    <BsInstagram />
                  </ChakraLink>
                </Link>
                <Link href="/">
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
              <Text color="secondary" fontSize="sm">
                © 2022 • Todos os direitos reservados.
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="50%"
            direction={{base: 'column', md: 'row'}}
            justify="space-around"
            gap={{base: '30px', md: '0'}}
          >
            {navigation &&
              navigation.map((page, key) => (
                <Flex
                  key={key}
                  direction="column"
                  align={{base: 'center', md: 'flex-start'}}
                  gap="20px"
                >
                  <Heading color="title" fontSize="lg" fontWeight="bold">
                    {page.title}
                  </Heading>

                  {page.navigation.map((item, key) => (
                    <Link href={item.link} key={key} passHref>
                      <ChakraLink
                        color="title"
                        fontSize="md"
                        _hover={{color: 'primaryBlue'}}
                        _focus={{boxShadow: 'none'}}
                        target="_blank"
                      >
                        {item.label}
                      </ChakraLink>
                    </Link>
                  ))}
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
