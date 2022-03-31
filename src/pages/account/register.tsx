import CustomInput from '@components/Forms/CustomInput';
import {AiFillAlert} from 'react-icons/ai';

export default function Register() {
  return (
    <CustomInput
      name="exemplo"
      placeholder="teste"
      title="Titulo"
      // type="password"
      leftIcon={<AiFillAlert />}
      // disabled={true}
      w="100%"
    />
  );
}
