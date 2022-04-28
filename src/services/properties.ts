import api from './api';

export const getAllProperties = async () => {
  const {data} = await api.get('/properties');
  return data;
};

export const getAll = async () => {
  const {data} = await api.get('/properties');
  return data;
};

export const getAllCities = async () => {
  const {data} = await api.get('/property/cities');
  return data;
};

export const getFilteredProperties = async (queries?: string) => {
  const {data} = await api.get('/properties/search' + queries);
  return data;
};

export const getPropertyById = async (id: string) => {
  const {data} = await api.get(`/property/${id}`);
  return data;
};

export const getPropertyByQueryId = async () => {
  const id = window.location.pathname.split('/imovel/')[1];
  return await getPropertyById(id);
};
