import Container from '@components/layout/Container';
import Table from '@components/shared/Table';
import Heading from '@components/shared/Table/Heading';
import RealEstateRow from '@components/shared/Table/rows/RealEstateRow';
import {getAllActive} from '@services/realEstate';
import {useSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import {realEstateActiveColumns} from 'src/constants/tableColumns';
import useFetch from 'src/hooks/useFetch';

export default function Imobiliarias() {
  const {data, isLoading} = useFetch<TRealEstate[]>({service: getAllActive});

  return (
    <Container>
      <Heading title="Administrativo" description="Imobiliárias ativas" />
      <Table
        columns={realEstateActiveColumns}
        rows={data?.map((row) => <RealEstateRow {...row} />) ?? []}
        isLoading={isLoading}
      />
    </Container>
  );
}
