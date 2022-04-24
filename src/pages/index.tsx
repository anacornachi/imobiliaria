import {
  Flex,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import CityHighlight from '@components/CityHighlight';
import Link from 'next/link';
import useFetch from 'src/hooks/useFetch';
import {getAll} from '@services/properties';
import {useEffect, useState} from 'react';
import PropertyList from '@components/PropertyList';
import FooterBanner from '@components/Banners/FooterBanner';
import MainBanner from '@components/Banners/MainBanner';

function HomePage() {
  const {data, isLoading} = useFetch<TProperty[]>({service: getAll});
  const [propertyData, setPropertyData] = useState(data);

  useEffect(() => {
    data && setPropertyData(data);
  }, [data]);

  return (
    <Container
      py="20px"
      d="flex"
      flexDirection="column"
      gap={{base: '30px', md: ' 100px'}}
    >
      <MainBanner />
      <CityHighlight />
      <Flex
        align="center"
        direction="column"
        gap={{base: '20px', md: '60px'}}
        w="100%"
      >
        <Flex justify="space-between" align="center" w="100%">
          <Heading
            as="h3"
            fontSize={{base: '20px', md: '30px', lg: '40px'}}
            w="60%"
          >
            Adicionados recentemente
          </Heading>
          <Link href="/imoveis" passHref>
            <ChakraLink
              color="primaryBlue"
              w="40%"
              textAlign="end"
              fontSize={{base: '16px', md: '22px'}}
              _focus={{boxShadow: 'none'}}
            >
              Ver todos
            </ChakraLink>
          </Link>
        </Flex>

        {isLoading ? (
          <Spinner />
        ) : (
          <SimpleGrid columns={{base: 1, lg: 2}} spacing="40px">
            {propertyData?.map((property, key) => (
              <PropertyList key={key} property={property} />
            )) ?? []}
          </SimpleGrid>
        )}
      </Flex>
      <FooterBanner />
    </Container>
  );
}

export default HomePage;
