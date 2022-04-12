export const tableColumns = [
  {
    title: 'Administrativo',
    description: 'Imobiliárias em aprovação',
    label: 'toApprove',
    role: 'admin',
    columns: ['Nome', 'CNPJ', 'Imóveis', 'Corretores', 'Aprovação'],
  },
  {
    title: 'Administrativo',
    description: 'Imobiliárias',
    label: 'realEstates',
    role: 'admin',
    columns: ['Nome', 'CNPJ', 'Imóveis Cadastrados', 'Status'],
  },
  {
    title: 'Administrativo',
    description: 'Corretores',
    label: 'brokers',
    role: 'realEstate',
    columns: ['Nome', 'CPF', 'CRECI', 'Status'],
  },
];
