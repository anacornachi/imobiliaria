import {Td, Tr} from '@chakra-ui/react';

type Props = {
  data: TBroker[];
};

export default function BrokerRow({data}: Props) {
  return (
    <>
      {data.map(({name, cpf, creci, status}, key) => (
        <Tr key={key}>
          <Td borderBottom="1px" borderColor="#C0C0C0">
            {name}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0">
            {cpf}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0">
            {creci?.toUpperCase()}
          </Td>
          <Td borderBottom="1px" borderColor="#C0C0C0">
            {status == true ? 'Ativo' : 'Inativo'}
          </Td>
        </Tr>
      ))}
    </>
  );
}
