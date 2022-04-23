import api from './api';

export const getAll = async () => {
  const {data} = await api.get('/properties');
  return data;
};

export const getAllCities = async () => {
  const {data} = await api.get('/property/cities');
  return data;
};
