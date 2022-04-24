import {Box, Flex, Heading, Input, Spinner, Text} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import PropertyList from '@components/PropertyList';
import {getAllProperties} from '@services/properties';
import filterData from '@utils/filterData';
import {ChangeEvent, useEffect, useState} from 'react';
import useFetch from 'src/hooks/useFetch';

export default function Imoveis() {
  const {data, isLoading} = useFetch<TProperty[] | undefined>({
    service: getAllProperties,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [propertiesData, setPropertiesData] = useState(data);

  useEffect(() => {
    const filteredData = filterData(data, searchTerm);
    setPropertiesData(filteredData);
  }, [searchTerm]);

  useEffect(() => {
    data && setPropertiesData(data);
  }, [data]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Flex
        bg="main"
        h={{base: '200px', md: '283px'}}
        w="100%"
        borderRadius="40px"
        p={{base: '20px', md: '60px'}}
        gap="15px"
        justify="center"
        direction="column"
      >
        <Heading as="h2" fontSize={{base: '28px', sm: '34px', lg: '50px'}}>
          Um lugar para chamar de lar...
        </Heading>
        <Text
          color="description"
          fontSize={{base: '14px', sm: '17px', lg: '20px'}}
          w={{base: '100%', md: '40%'}}
        >
          Tenha acesso a toda a plataforma
          <span style={{fontWeight: 'bold'}}> gratuitamente</span> e encontre
          seu
          <span style={{fontWeight: 'bold'}}> imóvel dos sonhos.</span>
        </Text>
      </Flex>
      <Flex mt="40px">
        <Box w="20%" bg="red">
          teste
        </Box>
        <Flex w="80%" bg="yellow" direction="column">
          <Input
            alignSelf="end"
            mt="10px"
            w={{base: '100%', md: '40%'}}
            name="search"
            placeholder="Busque pelo nome..."
            bg="main"
            borderRadius="20px"
            border="none"
            _focus={{boxShadow: 'none', border: 'none'}}
            onChange={handleChange}
          />
          {isLoading ? (
            <Spinner alignSelf="center" mt="20px" />
          ) : (
            propertiesData?.map((property, key) => (
              <PropertyList key={key} property={property} />
            ))
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

// no hello, vou colocar um input para filtrar os dados que serão renderizados
// preciso dar um getAllProperties para poder renderizar cada propriedade dentro do componente certinho
// colocar um spinner enquanto o status for loading
