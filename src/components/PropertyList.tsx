import {Flex, Box, Image, Badge, Heading, BoxProps} from '@chakra-ui/react'

type Props = {
   propertyName: string,
   neighborhood: string,
   image: string,
   bedrooms: number,
   bathrooms: number,
   size: number,
   garage: number,
   postBy: string,
   price: number
 } & BoxProps;

export default function PropertyList({
  propertyName,
  neighborhood,
  image,
  bedrooms,
  bathrooms,
  size,
  garage,
  postBy,
  price,
  ...props
  }: Props) {

  return (
      <Box
      {...props}
      maxW="910px"
      h="fit-content"
      maxH={{base: 'fit-content', md: '249px'}}
      borderRadius="30px"
      boxShadow="xs"
      border="1px"
      borderColor="input"
      color="secondary"
      _hover={{boxShadow: 'lg', border: '1px', borderColor: 'primaryBlue'}}
    >
      <Flex
        w="100%"
        direction={{base: 'column', sm: 'row'}}
        py="29px"
        px={{base: '15px', md: '56px'}}
        gap={{base: '36px', md: '56px'}}
      >
        <Image
          w={{base: '100%', sm: '30%'}}
          h="191px"
          objectFit="cover"
          borderRadius="20px"
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Flex
          direction="column"
          w={{base: '100%', sm: '70%'}}
          gap={{base: '20px', md: '25px'}}
        >
          <Heading as="h2" fontSize="25px" color="title" fontWeight="600">
            {propertyName},
            <br /> {neighborhood}
          </Heading>
          <Flex wrap="wrap" justifyContent="space-between" align="center">
            <Heading as="h3" fontSize={{base: '13px', md: '19px'}}>
              {bedrooms} Quartos
            </Heading>
            <Heading as="h3" fontSize={{base: '13px', md: '19px'}}>
              {size} M2
            </Heading>
            <Heading as="h3" fontSize={{base: '13px', md: '19px'}}>
              {garage} Garagens
            </Heading>
          </Flex>
          <Flex
            direction={{base: 'column', sm: 'row'}}
            justifyContent="space-between"
            alignItems="center"
            gap={{base: '25px', md: 0}}
          >
            <Heading
              as="h3"
              fontSize={{base: '15px', md: '19px'}}
              fontWeight="200"
            >
              Anunciado por {postBy}
            </Heading>
            <Badge
              bg="secondary"
              color="#FFFFFF"
              borderRadius="10px"
              py="8px"
              px={{base: '13px', md: '20px'}}
              textAlign="center"
              fontSize="19px"
            >
              R$ {price}
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
