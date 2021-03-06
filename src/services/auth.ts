import api from './api';

export const authenticate = async ({email, password}: TCredentials) => {
  const {data} = await api.post('/login', {
    email,
    password,
  });

  return data;
};

export const signUp = async (
  userData: TUser | TNewRealEstate,
  role: string,
) => {
  if (role === 'client') {
    const {cpf, ...rest} = userData;
    const {data} = await api.post('/user/register', {
      cpf: cpf,
      ...rest,
      role: role,
    });

    return data;
  } else if (role === 'realEstate') {
    const {name, cnpj, state, initialBroker, initialProperties, ...user} =
      userData as TNewRealEstate;
    const {data} = await api.post('/realestate/register', {
      userData: {
        state,
        ...user,
        role: 'realEstate',
      },
      realEstateData: {
        name,
        cnpj,
        state,
        initialBroker: initialBroker === 'Sim',
        initialProperties,
      },
    });
  }
};
