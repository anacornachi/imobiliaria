import {Flex, Box, Image, Badge, Heading} from '@chakra-ui/react';
import convertToBRL from '@utils/convertToBRL';
import {useRouter} from 'next/router';
import {IoBed} from 'react-icons/io5';
import {FaBath, FaCar} from 'react-icons/fa';

type Props = {
  property: TProperty;
};

export default function PropertyList({property}: Props) {
  const router = useRouter();

  return (
    <Box
      maxW="910px"
      h="fit-content"
      maxH={{base: 'fit-content', md: '249px'}}
      borderRadius="30px"
      boxShadow="xs"
      border="1px"
      borderColor="input"
      color="secondary"
      _hover={{boxShadow: 'lg', border: '1px', borderColor: 'primaryBlue'}}
      onClick={() => router.push('/imovel/' + property.id)}
      cursor="pointer"
    >
      <Flex
        w="100%"
        direction={{base: 'column', sm: 'row'}}
        py="29px"
        px={{base: '15px', md: '56px', lg: '29px'}}
        gap={{base: '36px', md: '56px', lg: '20px'}}
      >
        <Image
          alt=""
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
            {property.title},
            <br /> {property.city}
          </Heading>
          <Flex wrap="wrap" justifyContent="space-between" align="center">
            <Flex align="center" gap="12px">
              <Heading as="h4" fontSize={{base: '13px', md: '19px'}}>
                {property.amountBedrooms}
              </Heading>
              <IoBed />
            </Flex>
            <Flex align="center" gap="12px">
              <Heading as="h4" fontSize={{base: '13px', md: '19px'}}>
                {property.amountBathrooms}
              </Heading>
              <FaBath />
            </Flex>
            <Flex align="center" gap="12px">
              <Heading as="h4" fontSize={{base: '13px', md: '19px'}}>
                {property.amountGarage}
              </Heading>
              <FaCar />
            </Flex>
          </Flex>
          <Flex
            direction={{base: 'column', sm: 'row'}}
            justifyContent="space-between"
            alignItems="center"
            gap={{base: '25px', md: 0}}
          >
            <Heading
              as="h3"
              fontSize={{base: '17px', md: '19px'}}
              fontWeight="200"
            >
              {property.realEstate?.name}
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
              {property.isRenting
                ? convertToBRL(property.valueRental)
                : convertToBRL(property.valueSell)}
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
