import {Flex, Heading, SimpleGrid, Spinner} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import PropertyList from '@components/PropertyList';
import {getFilteredProperties} from '@services/properties';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function PropertySearch() {
  const router = useRouter();
  const [filteredProperties, setFilteredProperties] = useState<
    TProperty[] | undefined
  >(undefined);

  useEffect(() => {
    getFilteredProperties(router.asPath.split('busca')[1]).then((properties) =>
      setFilteredProperties(properties),
    );
  }, [router.isReady]);

  return (
    <Container py="60px">
      <Heading mb="50px">Resultado da busca...</Heading>
      {filteredProperties === undefined ? (
        <Flex w="100%" justify="center">
          <Spinner />
        </Flex>
      ) : (
        <SimpleGrid columns={2} spacing="40px">
          {filteredProperties?.map((property, key) => (
            <PropertyList key={key} property={property} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
