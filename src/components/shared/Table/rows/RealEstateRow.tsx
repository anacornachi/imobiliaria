import {Td, Tr} from '@chakra-ui/react';

export default function RealEstateRow({
  name,
  cnpj,
  properties,
  status,
}: TRealEstate) {
  return (
    <Tr>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {name}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {cnpj}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {properties}
      </Td>
      <Td borderBottom="1px" borderColor="#C0C0C0" w="20%">
        {status == 'active' ? 'Ativo' : 'Inativo'}
      </Td>
    </Tr>
  );
}
