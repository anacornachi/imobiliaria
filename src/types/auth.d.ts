type TCredentials = {
  email: string;
  password: string;
};

type TSession = {
  id: number;
  firstName: string;
  email: string;
};

type TNewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
