import api from './api';

export const getUserById = async () => {
  const {data} = await api.get('/user/');
  return data as TUser;
};
