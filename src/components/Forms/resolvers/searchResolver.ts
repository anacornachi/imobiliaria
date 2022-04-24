import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  city: Yup.string().required(),
});

export const searchResolver = yupResolver(validationSchema);
