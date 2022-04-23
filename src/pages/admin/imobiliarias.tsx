import {Flex, Input} from '@chakra-ui/react';
import Container from '@components/layout/Container';
import Table from '@components/shared/Table';
import Heading from '@components/shared/Table/Heading';
import RealEstateRow from '@components/shared/Table/rows/RealEstateRow';
import {getAllActive} from '@services/realEstate';
import filterData from '@utils/filterData';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {realEstateActiveColumns} from 'src/constants/tableColumns';
import useFetch from 'src/hooks/useFetch';

export default function Imobiliarias() {
  const router = useRouter();
  const {status} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/conta/nao-autenticado');
    },
  });

  const {data, isLoading} = useFetch<TRealEstate[]>({
    service: getAllActive,
    status,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [mainData, setMainData] = useState(data);

  useEffect(() => {
    const filteredData = filterData(data, searchTerm);
    setMainData(filteredData);
  }, [searchTerm]);

  useEffect(() => {
    data && setMainData(data);
  }, [data]);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Heading title="Administrativo" description="Imobiliárias ativas" />
      <Flex
        py="10px"
        justify="flex-end"
        px="20px"
        bg="#ECF1F8"
        borderTopRadius="40px"
      >
        <Input
          mt="10px"
          w={{base: '100%', md: '40%'}}
          name="search"
          placeholder="Busque pelo nome ou cnpj..."
          bg="input"
          borderRadius="20px"
          border="none"
          _focus={{boxShadow: 'none', border: 'none'}}
          onChange={handleChange}
        />
      </Flex>
      <Table
        columns={realEstateActiveColumns}
        rows={
          mainData?.map((row, key) => <RealEstateRow {...row} key={key} />) ??
          []
        }
        isLoading={isLoading}
      />
    </Container>
  );
}
