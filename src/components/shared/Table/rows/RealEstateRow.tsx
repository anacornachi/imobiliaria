import {Td, Tr} from '@chakra-ui/react';

type Props = {
  data: {
    name: string;
    cnpj: string;
    properties: string;
    brokers: boolean;
    approve: boolean;
  }[];
};

export default function RealEstateRow({data}: Props) {
  return (
    <>
      {data.map(({name, cnpj, properties, brokers, approve}, key) => (
        <Tr key={key}>
          <Td>{name}</Td>
          <Td>{cnpj}</Td>
          <Td>{properties}</Td>
          <Td>{brokers == true ? 'sim' : 'não'}</Td>
          <Td>{approve == true ? 'pendente' : 'decidido'}</Td>
        </Tr>
      ))}
    </>
  );
}
