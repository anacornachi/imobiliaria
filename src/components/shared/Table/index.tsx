import {
  Button,
  Flex,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import CustomInput from '@components/Forms/CustomInput';
import Container from '@components/layout/Container';
import BrokerRow from './rows/BrokerRow';
import Heading from './Heading';
import {tableColumns} from 'src/constants/tableColumns';
import {usePagination} from 'react-use-pagination';
import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import RealEstateRow from './rows/RealEstateRow';

type Props = {
  label: string;
  dataRow: TBroker[] | TRealEstate[];
};

export default function Table({label, dataRow}: Props) {
  const actualLabel = tableColumns.filter((item) => item.label == label);
  const [{title, description, columns}] = actualLabel;

  const [data] = useState(dataRow);

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({totalItems: data.length, initialPageSize: 5});

  return (
    <>
      <Container>
        <Heading
          title={title}
          description={description}
          button={label == 'brokers'}
        />
        <TableContainer bg="#ECF1F8" borderRadius="40px">
          <Flex py="10px" justify="flex-end" px="20px">
            <CustomInput
              w={{base: '100%', md: '40%'}}
              name="search"
              placeholder="Busque aqui..."
            />
          </Flex>
          <ChakraTable variant="simple">
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
                  data={data.slice(startIndex, endIndex + 1) as TBroker[]}
                />
              ) : (
                <RealEstateRow
                  data={data.slice(startIndex, endIndex + 1) as TRealEstate[]}
                  label={label}
                />
              )}
            </Tbody>
          </ChakraTable>
          <Flex py="10px" justify="flex-end" px="20px" align="center">
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
