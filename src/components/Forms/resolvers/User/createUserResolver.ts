import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {brazilianStates} from 'src/constants/brazilianStates';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Este campo é obrigatório.'),
  lastName: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .min(8, 'A senha precisa de pelo menos 8 digitos')
    .required('Este campo é obrigatório.'),
  cpf: Yup.string().required('Este campo é obrigatório.'),
  state: Yup.string()
    .oneOf(brazilianStates.map(({value}) => value))
    .required('Este campo é obrigatório.'),
  userTerms: Yup.boolean()
    .oneOf([true], 'Este campo é obrigatório.')
    .required('Este campo é obrigatório.'),
});

export const createUserResolver = yupResolver(validationSchema);
