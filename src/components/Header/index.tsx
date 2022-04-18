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
import logo from '@public/assets/images/Logo.png';
import Link from 'next/link';
import {HiMenu} from 'react-icons/hi';
import {useState} from 'react';
import {IoCloseSharp} from 'react-icons/io5';
import {navigationHeader} from './navigationHeader';
import {signOut, useSession} from 'next-auth/react';

export default function Header() {
  const [isLargerThan760px] = useMediaQuery('(min-width: 760px)');
  const [isOpen, setIsOpen] = useState(false);
  const {data, status} = useSession();

  return (
    <Container maxH="134px" py="30px">
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="logo" />
        {isLargerThan760px ? (
          <Flex gap="50px" as="nav" align="center">
            {navigationHeader.map((navigation, key) => (
              <Link href={navigation.link} passHref key={key}>
                <ChakraLink _hover={{border: 'none'}} fontWeight="medium">
                  {navigation.label}
                </ChakraLink>
              </Link>
            ))}
            {status === 'authenticated' ? (
              <Button
                variant="secondary"
                fontWeight="medium"
                w="130px"
                onClick={async () => await signOut()}
              >
                LOG OUT
              </Button>
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
              <MenuItem h="70px" justifyContent="center">
                {status === 'authenticated' ? (
                  <Button>LOG OUT</Button>
                ) : (
                  <Button
                    isLoading={status === 'loading'}
                    variant="secondary"
                    fontWeight="medium"
                  >
                    <Link href="/conta/login">LOG IN</Link>
                  </Button>
                )}
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Container>
  );
}
