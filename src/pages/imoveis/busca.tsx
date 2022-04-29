import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
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
    <Container py="60px" position="relative">
      <Heading mb="50px">Resultado da busca...</Heading>
      {filteredProperties === undefined ? (
        <Flex w="100%" justify="center">
          <Spinner />
        </Flex>
      ) : (
        <SimpleGrid
          columns={filteredProperties.length > 0 ? 2 : 1}
          spacing="40px"
        >
          {filteredProperties.length > 0 ? (
            filteredProperties?.map((property, key) => (
              <PropertyList key={key} property={property} />
            ))
          ) : (
            <Flex direction="column" align="center" gap="30px">
              <Heading as="h3" fontSize="20px">
                Não encontramos nenhum resultado... 🙁
              </Heading>
              <Text>
                Veja mais dos nossos imóveis clicando no botão abaixo.
              </Text>
              <Button
                variant="secondary"
                onClick={() => router.push('/imoveis')}
              >
                Ver todos os imóveis
              </Button>
            </Flex>
          )}
        </SimpleGrid>
      )}
    </Container>
  );
}
