import api from './api';

export const getAllProperties = async () => {
  const {data} = await api.get('/properties');
  return data;
};
