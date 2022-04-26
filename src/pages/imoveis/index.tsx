import {Button, Flex, Heading, Input, Spinner, Text} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import PropertyList from '@components/PropertyList';
import SearchFilter from '@components/SearchFilter';
import SearchFilterMobile from '@components/SearchFilter/SearchFilterMobile';
import {getFilteredProperties} from '@services/properties';
import filterData from '@utils/filterData';
import {useRouter} from 'next/router';
import {useEffect, useMemo, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {usePagination} from 'react-use-pagination';
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

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({totalItems: propertiesData?.length, initialPageSize: 5});

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
      <Flex mt="40px" direction={{base: 'column', md: 'row'}} h="auto">
        <Flex direction="column" w={{base: '100%', md: '20%'}}>
          <SearchFilter />
          <SearchFilterMobile />
        </Flex>
        <Flex
          w={{base: '100%', md: '80%'}}
          direction="column"
          align="center"
          gap="40px"
          h="auto"
        >
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
            <Flex
              direction="column"
              w="100%"
              pl={{base: 0, md: '60px'}}
              gap="40px"
              h="auto"
            >
              {propertiesData
                ?.slice(startIndex, endIndex + 1)
                .map((property, key) => (
                  <PropertyList key={key} property={property} w="100%" />
                ))}
            </Flex>
          )}
          <Flex py="10px" alignItems="center" px="20px" alignSelf="end">
            {currentPage > 0 && (
              <Button
                onClick={setPreviousPage}
                disabled={!previousEnabled}
                bg="none"
                _focus={{boxShadow: 'none'}}
                _hover={{bg: 'none'}}
                _active={{bg: 'none'}}
              >
                <IoIosArrowBack />
              </Button>
            )}
            <Text>
              {currentPage + 1} de {totalPages}
            </Text>
            <Button
              onClick={setNextPage}
              disabled={!nextEnabled}
              bg="none"
              _hover={{bg: 'none'}}
              _focus={{boxShadow: 'none'}}
              _active={{bg: 'none'}}
            >
              <IoIosArrowForward />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
