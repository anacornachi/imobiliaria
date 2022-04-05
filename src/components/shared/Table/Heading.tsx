import {Box, Heading as ChakraHeading, Text} from '@chakra-ui/react';

type Props = {
  title: string;
  description: string;
};

export default function Heading({title, description}: Props) {
  return (
    <Box h="150px" fontFamily="vietnam" py="20px">
      <ChakraHeading as="h2" fontSize="40px">
        {title}
      </ChakraHeading>
      <Text color="description" mt="10px" fontSize="18px">
        {description}
      </Text>
    </Box>
  );
}
