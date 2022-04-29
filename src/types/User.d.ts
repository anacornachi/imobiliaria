type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  city: string;
  state: string;
};

type TUserPassword = {
  oldPassword: string;
  newPassword: string;
};
