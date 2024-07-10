export const formatValueToBRL = (value: number) => {
  const formatedValue = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `R$ ${formatedValue}`;
};
