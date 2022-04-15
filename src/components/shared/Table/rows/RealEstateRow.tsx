import {Flex, IconButton, Td, Tr} from '@chakra-ui/react';
import {GoCheck, GoX} from 'react-icons/go';

type Props = {
  data: TRealEstate[];
  label: string;
};

export default function RealEstateRow({data, label}: Props) {
  return (
    <>
      {data.map(
        (
          {name, cnpj, properties, status, initialProperties, initialBrokers},
          key,
        ) => (
          <Tr key={key}>
            <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
              {name}
            </Td>
            <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
              {cnpj}
            </Td>
            {label == 'toApprove' ? (
              <>
                <Td borderBottom="1px" borderColor="#C0C0C0">
                  {initialBrokers}
                </Td>
                <Td borderBottom="1px" borderColor="#C0C0C0">
                  {initialProperties}
                </Td>
                <Td borderBottom="1px" borderColor="#C0C0C0">
                  {
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
                  }
                </Td>
              </>
            ) : (
              <>
                <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
                  {properties}
                </Td>
                <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
                  {status == 'active' ? 'Ativo' : 'Inativo'}
                </Td>
              </>
            )}
          </Tr>
        ),
      )}
    </>
  );
}
