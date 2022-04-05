import Table from '@components/shared/Table';
import {brokerMock} from 'src/mocks/brokerMock';

export default function index() {
  return <Table label="brokers" dataRow={brokerMock} />;
}
