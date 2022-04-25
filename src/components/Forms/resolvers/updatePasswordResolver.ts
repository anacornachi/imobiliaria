import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  actualPassword: Yup.string()
    .required('Este campo é obrigatório.')
    .min(8, 'A senha precisa de pelo menos 8 digitos'),
  password: Yup.string()
    .required('Este campo é obrigatório.')
    .min(8, 'A senha precisa de pelo menos 8 digitos'),
});

export const updatePasswordResolver = yupResolver(validationSchema);
