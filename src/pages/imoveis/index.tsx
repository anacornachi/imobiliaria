import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import CustomCheckbox from '@components/CustomCheckbox';
import Container from '@components/layout/Container';
import PropertyList from '@components/PropertyList';
import {getAllProperties, getFilteredProperties} from '@services/properties';
import filterData from '@utils/filterData';
import {useRouter} from 'next/router';
import {ChangeEvent, useEffect, useMemo, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import useFetch from 'src/hooks/useFetch';

export default function Imoveis() {
  const router = useRouter();
  const queries = useMemo(
    () => router.asPath.split(router.pathname)[1],
    [router.query],
  );
  const {data, isLoading} = useFetch<TProperty[] | undefined>({
    service: () => getFilteredProperties(queries),
    options: {
      trigger: 'onQueryChange',
    },
  });
  console.log(router);
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

  const bedroomOptions = [1, 2, 3, 4];
  const bathroomOptions = [1, 2, 3, 4];
  const garageOptions = [1, 2, 3, 4];

  const [beds, setBeds] = useState<number | undefined>();
  const [baths, setBaths] = useState<number | undefined>();
  const [garage, setGarage] = useState<number | undefined>();

  const handleStateToQueryChange = (
    number: number,
    state: number | undefined,
    setState: (number?: number) => void,
    query: string,
  ) => {
    if (number === state) {
      setState(undefined);
    } else {
      setState(number);
    }
    delete router.query[query];
    router.push({
      query: {
        ...router.query,
        ...(number === state ? {} : {[query]: number}),
      },
    });
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
        <Box w="20%">
          <Flex
            direction="column"
            bg="main"
            borderRadius="40px"
            py="40px"
            px="20px"
            gap="20px"
          >
            <Heading as="h5" fontSize="25px" alignSelf="center">
              Quartos
            </Heading>
            <Flex
              direction="column"
              gap="10px"
              color="description"
              fontWeight="medium"
            >
              {bedroomOptions.map((option) => (
                <Flex
                  key={option}
                  onClick={() =>
                    handleStateToQueryChange(option, beds, setBeds, 'beds')
                  }
                  cursor="pointer"
                >
                  <Checkbox
                    isChecked={String(option) === (router.query.beds as string)}
                  />
                  <Text ml={2}>
                    {option} quarto{option > 1 ? 's' : ''}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Heading as="h5" fontSize="25px" alignSelf="center">
              Banheiros
            </Heading>
            <Flex
              direction="column"
              gap="10px"
              color="description"
              fontWeight="medium"
            >
              {bathroomOptions.map((option) => (
                <Flex
                  key={option}
                  onClick={() =>
                    handleStateToQueryChange(option, baths, setBaths, 'baths')
                  }
                  cursor="pointer"
                >
                  <Checkbox
                    isChecked={
                      String(option) === (router.query.baths as string)
                    }
                  />
                  <Text ml={2}>
                    {option} banheiro{option > 1 ? 's' : ''}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Heading as="h5" fontSize="25px" alignSelf="center">
              Garagens
            </Heading>
            <Flex
              direction="column"
              gap="10px"
              color="description"
              fontWeight="medium"
            >
              {/* <RadioGroup onChange={setValue} value={value}></RadioGroup> */}
              <RadioGroup>
                <Stack direction="column">
                  <Radio value="1">1 garagem</Radio>
                  <Radio value="2">2 garagens</Radio>
                  <Radio value="3">3 garagens</Radio>
                  <Radio value="4">4 garagens +</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </Flex>
        </Box>
        <Flex w="80%" direction="column" align="center" gap="60px">
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
