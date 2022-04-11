import { Flex, Heading } from "@chakra-ui/react";

export default function Overview() {
  return (
   <Flex w="357px" h="283px" bg="main" borderRadius="40px" px="63px" py="43px" direction="column" justifyContent="center" alignItems="center" textAlign="center">
      <Heading as="h2" fontSize="33px" fontWeight="600" w="100%" color="title" mb="38px">Imobiliárias Cadastradas</Heading>
      <Heading as="h2" fontSize="64px" fontWeight="600" w="100%" color="description">250</Heading>
   </Flex>
  )
}
