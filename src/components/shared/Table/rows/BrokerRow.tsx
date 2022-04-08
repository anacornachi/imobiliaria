import {Td, Tr} from '@chakra-ui/react';

type Props = {
  data: TBroker[];
};

export default function BrokerRow({data}: Props) {
  return (
    <>
      {data.map(({name, cpf, creci, status}, key) => (
        <Tr key={key}>
          <Td borderBottom="1px" borderColor="#C0C0C0" w="25%">
            {name}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0" w="25%">
            {cpf}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0" w="25%">
            {creci?.toUpperCase()}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0" w="25%">
            {status == true ? 'Ativo' : 'Inativo'}
          </Td>
        </Tr>
      ))}
    </>
  );
}
