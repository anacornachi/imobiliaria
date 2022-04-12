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

export default function Header() {
  const [isLargerThan760px] = useMediaQuery('(min-width: 760px)');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container maxH="134px" py="30px">
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="logo" />
        {isLargerThan760px ? (
          <Flex as="nav" gap="50px" align="center">
            {navigationHeader.map((navigation) => (
              <Link href={navigation.link} passHref>
                <ChakraLink _hover={{border: 'none'}} fontWeight="medium">
                  {navigation.label}
                </ChakraLink>
              </Link>
            ))}
            <Button
              variant="secondary"
              fontWeight="normal"
              w="130px"
              fontSize="16px"
              h="50px"
            >
              <Link href="/" passHref>
                <ChakraLink _hover={{border: 'none'}} fontWeight="medium">
                  LOG IN
                </ChakraLink>
              </Link>
            </Button>
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
              {navigationHeader.map((navigation) => (
                <MenuItem h="70px" justifyContent="center">
                  <Link href={navigation.link} passHref>
                    <ChakraLink fontWeight="medium">
                      {navigation.label}
                    </ChakraLink>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem h="70px" justifyContent="center">
                <Button variant="secondary" fontWeight="normal">
                  <Link href="/" passHref>
                    <ChakraLink fontWeight="medium">LOG IN</ChakraLink>
                  </Link>
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Container>
  );
}
