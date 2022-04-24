type TProperty = {
  id: string;
  brokerId: string;
  realEstateId: string;
  title: string;
  isActive: boolean;
  state: string;
  street: string;
  city: string;
  amountBedrooms: number;
  amountBathrooms: number;
  amountGarage: number;
  valueCondominium: number;
  iptu: number;
  valueRental: number;
  valueSell: number;
  isSelling: boolean;
  isRenting: boolean;
  type: string;
  realEstate: {
    name: string;
  };
};
