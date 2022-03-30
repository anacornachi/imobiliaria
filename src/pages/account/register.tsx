import CustomInput from '@components/Forms/CustomInput';
import {AiFillAlert} from 'react-icons/ai';

export default function Register() {
  return (
    <CustomInput
      name="exemplo"
      placeholder="teste"
      title="Titulo"
      leftIcon={<AiFillAlert />}
      w="30%"
    />
  );
}
