import {
  Button,
  Flex,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import Image from 'next/image';
import logo from '@public/assets/images/logo.png';
import Link from 'next/link';
import {HiMenu} from 'react-icons/hi';
import {useEffect, useState} from 'react';
import {IoCloseSharp} from 'react-icons/io5';
import {navigationHeader} from './navigationHeader';
import {signOut, useSession} from 'next-auth/react';
import {FiChevronDown} from 'react-icons/fi';
import {useRouter} from 'next/router';

export default function Header() {
  const [isLargerThan760px] = useMediaQuery('(min-width: 760px)');
  const [isOpen, setIsOpen] = useState(false);
  const {data: session, status} = useSession();
  const isAuthenticated = status === 'authenticated';
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setIsOpen(false));
  }, [router.events]);

  return (
    <Container maxH="134px" py="30px">
      <Flex justify="space-between" align="center">
        <ChakraLink href="/" _focus={{boxShadow: 'none'}}>
          <Image src={logo} alt="logo" draggable={false} />
        </ChakraLink>
        {isLargerThan760px ? (
          <Flex gap="50px" as="nav" align="center">
            {navigationHeader.map((navigation, key) => (
              <Link href={navigation.link} passHref key={key}>
                <ChakraLink
                  _hover={{border: 'none'}}
                  fontWeight="medium"
                  _focus={{boxShadow: 'none'}}
                >
                  {navigation.label}
                </ChakraLink>
              </Link>
            ))}
            {isAuthenticated ? (
              <Menu closeOnBlur={true} autoSelect={false}>
                <MenuButton
                  bg="none"
                  boxShadow="none"
                  _focus={{boxShadow: 'none', bg: 'none'}}
                  _hover={{bg: 'none'}}
                  _active={{bg: 'none'}}
                  as={Button}
                  rightIcon={<FiChevronDown />}
                  fontSize="20px"
                  fontWeight="normal"
                  color="primaryBlue"
                >
                  Olá, {session?.user.firstName}
                </MenuButton>
                <MenuList bg="white">
                  <MenuItem
                    _hover={{bg: 'none'}}
                    onClick={() => router.push('/conta/minha-conta')}
                  >
                    Minha conta
                  </MenuItem>
                  <MenuItem
                    _hover={{bg: 'none'}}
                    onClick={async () => await signOut()}
                  >
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                isLoading={status === 'loading'}
                variant="secondary"
                fontWeight="medium"
                w="130px"
              >
                <Link href="/conta/login">LOG IN</Link>
              </Button>
            )}
          </Flex>
        ) : (
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                isOpen ? <IoCloseSharp size="20px" /> : <HiMenu size="20px" />
              }
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              _focus={{boxShadow: 'none', bg: 'none'}}
              _last={{bg: 'none'}}
            />
            <MenuList
              w="100vw"
              borderRadius="none"
              border="none"
              boxShadow="xl"
              alignItems="center"
            >
              {navigationHeader.map((navigation, key) => (
                <MenuItem h="70px" justifyContent="center" key={key}>
                  <Link href={navigation.link} passHref>
                    <ChakraLink fontWeight="medium">
                      {navigation.label}
                    </ChakraLink>
                  </Link>
                </MenuItem>
              ))}
              {isAuthenticated ? (
                <>
                  <MenuItem h="70px" justifyContent="center">
                    <ChakraLink
                      _hover={{bg: 'none'}}
                      href="/conta/minha-conta"
                      fontWeight="medium"
                    >
                      MINHA CONTA
                    </ChakraLink>
                  </MenuItem>
                  <MenuItem h="70px" justifyContent="center">
                    <ChakraLink
                      fontWeight="medium"
                      _hover={{bg: 'none'}}
                      onClick={async () => await signOut()}
                    >
                      SAIR
                    </ChakraLink>
                  </MenuItem>
                </>
              ) : (
                <Button
                  isLoading={status === 'loading'}
                  variant="secondary"
                  fontWeight="medium"
                >
                  <Link href="/conta/login">LOG IN</Link>
                </Button>
              )}
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Container>
  );
}
