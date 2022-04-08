import Table from '@components/shared/Table';
import {brokerMock} from 'src/mocks/brokerMock';
import {realEstateMock} from 'src/mocks/RealEstateMock';

export default function index() {
  return <Table label="realEstates" dataRow={realEstateMock} />;
}
