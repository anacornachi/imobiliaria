import {
  Button,
  Flex,
  Input,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import BrokerRow from './rows/BrokerRow';
import Heading from './Heading';
import {tableColumns} from 'src/constants/tableColumns';
import {usePagination} from 'react-use-pagination';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import RealEstateRow from './rows/RealEstateRow';
import debounce from 'lodash.debounce';
import {useEffect, useMemo, useState} from 'react';

type Props = {
  label: string;
  dataRow: TBroker[] | TRealEstate[];
};

export default function Table({label, dataRow}: Props) {
  const actualColumns = tableColumns.filter((item) => item.label == label);
  const [{title, description, columns}] = actualColumns;

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({totalItems: dataRow.length, initialPageSize: 5});

  const [searchTerm, setSearchTerm] = useState('');

  // const [data, setData] = useState<any[]>(dataRow);
  // console.log({dataRow});
  // console.log({data});

  if (searchTerm !== '') {
    // console.log(dataRow);
    const names = dataRow
      .map((element) => element.name?.toLowerCase())
      .filter((name) => name?.includes(searchTerm.toLowerCase()));
    // console.log(names);
  }
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Container>
        <Heading
          title={title}
          description={description}
          button={label == 'brokers'}
        />
        <TableContainer
          bg="#ECF1F8"
          borderRadius="40px"
          h="440px"
          position="relative"
        >
          <Flex py="10px" justify="flex-end" px="20px">
            <Input
              mt="10px"
              w={{base: '100%', md: '40%'}}
              name="search"
              placeholder="Busque aqui..."
              bg="input"
              borderRadius="20px"
              border="none"
              _focus={{boxShadow: 'none', border: 'none'}}
              onChange={debouncedResults}
            />
          </Flex>
          <ChakraTable variant="simple" mt="5px">
            <Thead>
              <Tr>
                {columns.map((column, key) => (
                  <Th
                    key={key}
                    color="black"
                    borderBottom="1px"
                    borderColor="description"
                  >
                    {column}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {label == 'brokers' ? (
                <BrokerRow
                  data={dataRow.slice(startIndex, endIndex + 1) as TBroker[]}
                />
              ) : (
                <RealEstateRow
                  data={
                    dataRow.slice(startIndex, endIndex + 1) as TRealEstate[]
                  }
                  label={label}
                />
              )}
            </Tbody>
          </ChakraTable>
          <Flex
            py="10px"
            justify="flex-end"
            px="20px"
            align="center"
            position="absolute"
            bottom={0}
            right={0}
          >
            {currentPage > 0 && (
              <Button
                onClick={setPreviousPage}
                disabled={!previousEnabled}
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
              _hover={{bg: 'none'}}
              _focus={{boxShadow: 'none'}}
              _active={{bg: 'none'}}
            >
              <IoIosArrowForward />
            </Button>
          </Flex>
        </TableContainer>
      </Container>
    </>
  );
}
