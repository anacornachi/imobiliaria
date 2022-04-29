import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {brazilianStates} from 'src/constants/brazilianStates';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Este campo é obrigatório.'),
  lastName: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido')
    .required(),
  cpf: Yup.string().required(),
  state: Yup.string().oneOf(brazilianStates.map(({value}) => value)),
});

export const updateUserResolver = yupResolver(validationSchema);
