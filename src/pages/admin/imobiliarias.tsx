import Table from '@components/shared/Table';
import {getAllActive} from '@services/realEstate';
import {useSession} from 'next-auth/react';
import {useEffect, useState} from 'react';

export default function Imobiliarias() {
  const [realEstateRows, setrealEstateRows] = useState<any[]>([]);
  useEffect(() => {
    getAllActive().then((data) => setrealEstateRows(data));
  }, []);

  return (
    <>
      <Table label="realEstates" dataRow={realEstateRows} />
    </>
  );
}
