import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Este campo é obrigatório.'),
  lastName: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido.')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .required('Este campo é obrigatório.')
    .min(8, 'A senha precisa de pelo menos 8 digitos'),
  cpf: Yup.string()
    .matches(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
      'Deve ser um CPF válido.',
    )
    .required('Este campo é obrigatório.'),
  hasBrokers: Yup.string(),
  realEstateName: Yup.string().required('Este campo é obrigatório.'),
  cnpj: Yup.string()
    .matches(
      /([0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})/,
      'Deve ser um CNPJ válido.',
    )
    .required('Este campo é obrigatório.'),
  city: Yup.string().required('Este campo é obrigatório.'),
});
export const realEstateRegisterResolver = yupResolver(validationSchema);
