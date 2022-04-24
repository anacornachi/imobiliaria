export default function convertToBRL(value?: number) {
  if (!value) {
    return undefined;
  }
  return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
