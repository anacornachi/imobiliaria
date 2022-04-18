import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object()
  .shape({
    nome: Yup.string().required('Este campo é obrigatório.'),
    creci: Yup.string()
      .required('Este campo é obrigatório.')
      .matches(
        /[a-zA-Z]{2}[0-9]{6,8}/,
        'Deve ser um CRECI válido. ex: "RJ123321"',
      ),
    cpf: Yup.string()
      .matches(
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        'Deve ser um CPF válido',
      )
      .required('Este campo é obrigatório.'),
    status: Yup.boolean(),
  })
  .required();

export const updateBrokerResolver = yupResolver(validationSchema);
