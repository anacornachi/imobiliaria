import {
  Flex,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import CustomInput from '@components/Forms/CustomInput';
import Container from '@components/layout/Container';
import BrokerRow from './rows/BrokerRow';
import Heading from './Heading';
import {tableColumns} from 'src/constants/tableColumns';

type Props = {
  label: string;
  dataRow: TBroker[];
};

export default function Table({label, dataRow}: Props) {
  const data = tableColumns.filter((item) => item.label == label);
  const [{title, description, columns}] = data;

  return (
    <>
      <Container>
        <Heading title={title} description={description} />
        <TableContainer bg="#ECF1F8" borderRadius="40px" pb="100px">
          <Flex py="10px" justify="flex-end" px="20px">
            <CustomInput w="40%" name="search" placeholder="Busque aqui..." />
          </Flex>
          <ChakraTable variant="simple">
            <Thead>
              <Tr>
                {columns.map((column) => (
                  <Th
                    color="black"
                    fontFamily="50px"
                    borderBottom="1px"
                    borderColor="description"
                  >
                    {column}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <BrokerRow data={dataRow} />
            </Tbody>
          </ChakraTable>
        </TableContainer>
      </Container>
    </>
  );
}
