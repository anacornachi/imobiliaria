type TRealEstate = {
  id?: string;
  name: string;
  cnpj: string;
  state?: string;
  initialProperties?: string;
  initialBrokers?: string;
  properties?: number;
  brokers?: number;
  status?: string;
};

type TNewRealEstate = {
  name: string;
  cnpj: string;
  state?: string;
  initialProperties?: string;
  initialBroker?: string;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  role: string;
};
