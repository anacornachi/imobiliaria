import {
  Avatar,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {FaShower} from 'react-icons/fa';
import {IoBedOutline, IoLocationOutline} from 'react-icons/io5';
import {MdDirectionsCar} from 'react-icons/md';
import {useState} from 'react';

type Props = {
  data: TProperty;
};

export default function PropertyCard({data}: Props) {
  const [highlightImage, setHighlightImage] = useState(data.images[0]);

  return (
    <Flex
      w="100%"
      bg="main"
      borderRadius="40px"
      p={{base: '20px', md: '35px', lg: '50px'}}
      h={{base: 'auto', md: '500px'}}
      direction={{base: 'column', md: 'row'}}
      gap="30px"
    >
      <Flex
        direction="column"
        w={{base: '100%', md: '45%'}}
        h="100%"
        align="center"
        gap="20px"
      >
        <Flex h={{base: '200px', md: '75%'}} justify="center">
          <Image
            w={{base: '100%', md: '90%'}}
            src={highlightImage}
            alt=""
            borderRadius={{base: '20px', md: '40px'}}
            objectFit="cover"
            draggable={false}
          />
        </Flex>
        <Flex
          h={{base: '80px', md: '25%'}}
          gap="30px"
          w="100%"
          justify="center"
          maxW="100%"
          overflow="scroll"
        >
          {data.images.map((image) => (
            <Image
              key={image}
              alt=""
              w={{base: '100%', md: '25%'}}
              src={image}
              borderRadius="10px"
              cursor="pointer"
              draggable={false}
              onClick={() => setHighlightImage(image)}
              border={image == highlightImage ? '3px solid #1eadfe' : 'none'}
            />
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        gap={{base: '20px', md: '30px'}}
        w={{base: '100%', md: '55%'}}
        justify={{md: 'space-between'}}
      >
        <Flex
          gap={{base: '20px', lg: '40px'}}
          direction="column"
          w="100%"
          justify="space-between"
        >
          <Heading
            fontSize={{base: '25px', md: '40px'}}
            fontWeight="semibold"
            h="50%"
          >
            {data.title}
          </Heading>
          <SimpleGrid
            columns={{base: 2, md: 3, lg: 4}}
            gap={{base: '30px', md: 0}}
            color="secondary"
          >
            <Flex align="center">
              <IoBedOutline size="30px" />
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}} ml="4px">
                {data.amountBedrooms}
              </Heading>
            </Flex>
            <Flex align="center">
              <FaShower size="30px" />
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}} ml="4px">
                {data.amountBathrooms}
              </Heading>
            </Flex>
            <Flex align="center">
              <MdDirectionsCar size="30px" />
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}} ml="4px">
                {data.amountGarage}
              </Heading>
            </Flex>
            <Flex align="center">
              <IoLocationOutline size="30px" />
              <Heading as="h3" fontSize={{base: '13px', md: '20px'}} ml="4px">
                {data.city}, {data.state}
              </Heading>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          justify="space-between"
          direction={{base: 'column', md: 'row'}}
          gap={{md: '20px'}}
        >
          <Flex
            py={{base: '20px', md: '0'}}
            align="center"
            justify="center"
            alignSelf="flex-start"
          >
            <Avatar size="md" src="https://bit.ly/broken-link" />
            <Text
              ml="10px"
              fontSize={{base: '15px', lg: '20px'}}
              color="description"
              fontWeight="semibold"
            >
              {data.realEstate?.name ?? 'Imobiliária'}
            </Text>
          </Flex>
          <Flex direction="column" gap="15px" justify="space-between">
            <Button
              variant="primary"
              w="100%"
              h={{base: '60px', md: '50px', lg: '60px'}}
            >
              Fale com o corretor
            </Button>
            <Button
              variant="secondary"
              w="100%"
              h={{base: '60px', md: '50px', lg: '60px'}}
            >
              Quero visitar
            </Button>
            <Button
              variant="share"
              w="100%"
              h={{base: '60px', md: '50px', lg: '60px'}}
            >
              Compartilhar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
