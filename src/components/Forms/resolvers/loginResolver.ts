import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object()
  .shape({
    email: Yup.string()
      .email('Por favor, verifique se o e-mail é válido.')
      .required('Este campo é obrigatório.'),
    password: Yup.string()
      .required('Este campo é obrigatório.')
      .min(8, 'A senha precisa de pelo menos 8 digitos'),
  })
  .required();

export const loginResolver = yupResolver(validationSchema);
