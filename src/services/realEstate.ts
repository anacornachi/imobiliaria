import api from './api';

export const getAllActive = async () => {
  const {data} = await api.get('/realestate/active');
  return data as TRealEstate[];
};
