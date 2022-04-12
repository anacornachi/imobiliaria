import {
  Box,
  Button,
  Flex,
  Heading as ChakraHeading,
  Text,
} from '@chakra-ui/react';

type Props = {
  title: string;
  description: string;
  button?: boolean;
};

export default function Heading({title, description, button}: Props) {
  return (
    <Flex
      h="150px"
      py="20px"
      justify="space-between"
      align={{base: 'none', md: 'center'}}
      direction={{base: 'column', md: 'row'}}
      gap={{base: '10px', md: 0}}
    >
      <Box>
        <ChakraHeading as="h2" fontSize={{base: '30px', md: '40px'}}>
          {title}
        </ChakraHeading>
        <Text
          color="description"
          mt="10px"
          fontSize={{base: '15px', md: '18px'}}
        >
          {description}
        </Text>
      </Box>
      {button && <Button>Adicionar corretor</Button>}
    </Flex>
  );
}
