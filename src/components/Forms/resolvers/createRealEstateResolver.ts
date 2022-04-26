import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {yesOrNoOption} from 'src/constants/yesOrNo';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório.'),
  cnpj: Yup.string().required('Este campo é obrigatório.'),
  initialBroker: Yup.string()
    .oneOf(yesOrNoOption.map(({label}) => label))
    .required('Este campo é obrigatório.'),
  initialProperties: Yup.string().required('Este campo é obrigatório.'),
  firstName: Yup.string().required('Este campo é obrigatório.'),
  lastName: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .min(8, 'A senha precisa de pelo menos 8 digitos')
    .required('Este campo é obrigatório.'),
  cpf: Yup.string().required('Este campo é obrigatório.'),
  city: Yup.string().required('Este campo é obrigatório.'),
  realEstateTerms: Yup.boolean()
    .oneOf([true], 'Este campo é obrigatório.')
    .required('Este campo é obrigatório.'),
});

export const createRealEstateResolver = yupResolver(validationSchema);
