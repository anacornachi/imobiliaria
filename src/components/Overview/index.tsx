import {Flex, Heading} from '@chakra-ui/react';

type Props = {
  title: string;
  data: string;
};

export default function Overview({title, data}: Props) {
  return (
    <Flex
      w={{base: '100%', sm: '357px'}}
      h={{base: '220px', lg: '283px'}}
      bg="main"
      borderRadius="40px"
      px={{base: '40px', lg: '63px'}}
      py={{base: '20px', lg: '43px'}}
      direction="column"
      justify="center"
      textAlign="center"
    >
      <Heading
        as="h4"
        fontSize={{base: '25px', lg: '33px'}}
        fontWeight="600"
        w="100%"
        color="title"
        mb="38px"
      >
        {title}
      </Heading>
      <Heading
        as="h4"
        fontSize={{base: '45px', lg: '64px'}}
        fontWeight="600"
        w="100%"
        color="description"
      >
        {data}
      </Heading>
    </Flex>
  );
}
