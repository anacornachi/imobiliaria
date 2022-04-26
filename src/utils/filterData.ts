export default function filterData(data: any, filter: string) {
  const filteredData = data?.filter(
    (objeto: any) =>
      objeto.name?.toLowerCase().includes(filter.toLowerCase()) ||
      objeto.cnpj?.includes(filter) ||
      objeto.title?.toLowerCase().includes(filter.toLowerCase()) ||
      objeto.city?.toLowerCase().includes(filter.toLowerCase()),
  );
  return filteredData;
}
