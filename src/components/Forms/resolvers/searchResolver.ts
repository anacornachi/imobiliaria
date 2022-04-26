import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {brazilianStates} from 'src/constants/brazilianStates';

const validationSchema = Yup.object().shape({
  state: Yup.string()
    .oneOf(brazilianStates.map(({value}) => value))
    .required(),
});

export const searchResolver = yupResolver(validationSchema);
