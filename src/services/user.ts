import api from './api';

export const getUserById = async () => {
  const {data} = await api.get('/user/');
  return data as TUser;
};

export const updateUser = async (userData: TUser) => {
  const {data} = await api.put('/user/update', {
    ...userData,
  });
  return data as TUser;
};

export const updatePassword = async (userPasswordData: TUserPassword) => {
  const {data} = await api.patch('/user/password', {
    ...userPasswordData,
  });
  return data;
};

export const deleteUser = async () => {
  const {data} = await api.delete('/user/delete');
  return data;
};
