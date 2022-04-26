import {capitalize} from './capitalize';

export default function createUserSerializer(data: TUser) {
  data.firstName = capitalize(data.firstName);
  data.lastName = capitalize(data.lastName);

  return data;
}
