import {
  Button,
  Flex,
  Input,
  Spinner,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import {usePagination} from 'react-use-pagination';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import debounce from 'lodash.debounce';
import React, {ReactNode, useEffect, useMemo, useState} from 'react';

type Props = {
  columns: any[];
  rows: ReactNode[];
  isLoading: boolean;
};

export default function Table({columns, rows, isLoading}: Props) {
  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({totalItems: rows.length, initialPageSize: 5});

  return (
    <>
      <TableContainer
        bg="#ECF1F8"
        borderBottomRadius="40px"
        h="380px"
        position="relative"
      >
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
            {isLoading ? (
              <Flex position="absolute" top="50%" right="50%">
                <Spinner size="lg" />
              </Flex>
            ) : (
              rows.slice(startIndex, endIndex + 1)
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
    </>
  );
}
