import {Flex, IconButton, Td, Tr} from '@chakra-ui/react';
import {GoCheck, GoX} from 'react-icons/go';

export default function RealEstateToApproveRow({
  name,
  cnpj,
  properties,
  status,
  initialProperties,
  initialBrokers,
}: TRealEstate) {
  return (
    <Tr>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {name}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {cnpj}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0">
        {initialBrokers}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0">
        {initialProperties}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0">
        <Flex gap="20px">
          <IconButton
            colorScheme="green"
            borderRadius="20px"
            aria-label="Search database"
            icon={<GoCheck />}
          />
          <IconButton
            colorScheme="red"
            borderRadius="20px"
            aria-label="Search database"
            icon={<GoX />}
          />
        </Flex>
      </Td>
    </Tr>
  );
}
