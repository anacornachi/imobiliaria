import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/Logo.png';
import Container from './layout/Container';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

export default function propertyHeader() {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Container>
      <Box>
        <Flex
          fontFamily="vietnam"
          alignItems="center"
          paddingY="40px"
          justifyContent="space-between"
        >
          <Flex display={{base: 'flex', md: 'none'}}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w="3" h="3" />
                ) : (
                  <HamburgerIcon w="5" h="5" />
                )
              }
              variant={'ghost'}
              aria-label={'Navigation'}
            />
          </Flex>
          <Flex flex={{base: '1px'}} justify={{base: 'center', md: 'start'}}>
            <Image src={logo} alt="" />
          </Flex>
          <Flex
            display={{base: 'none', md: 'flex'}}
            alignItems="center"
            gap="50px"
          >
            <DesktopHeader />

            <Button
              flex="flex-end"
              fontSize="sm"
              fontWeight="semibold"
              color="primaryBlue"
              border="2px"
              borderColor="primaryBlue"
              borderRadius="14px"
              w={{base: '150px', md: '150px', lg: '150px'}}
              h={{base: '35px', md: '50px', lg: '50px'}}
              bg={'white'}
            >
              LOG IN
            </Button>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileHeader />
        </Collapse>
      </Box>
    </Container>
  );
}

const DesktopHeader = () => {
  return (
    <Stack direction={'row'}>
      {HEADER_ITEMS.map((navItem) => (
        <Box key={navItem.label} gap="50px">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize="sm"
                color="title"
                _hover={{
                  color: 'secondary',
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const MobileHeader = () => {
  return (
    <Stack display={{md: 'none'}}>
      {HEADER_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, href}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Stack onClick={onToggle}>
      <Flex
        py="5px"
        as={Link}
        href={href ?? '#'}
        justify="center"
        align="center"
        _hover={{
          color: 'secondary',
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{marginTop: '0!important'}}
      ></Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const HEADER_ITEMS: Array<NavItem> = [
  {
    label: 'HOME',
    href: '#',
  },
  {
    label: 'IMOBILIÁRIAS',
    href: '#',
  },
  {
    label: 'SOBRE NÓS',
    href: '#',
  },
];
