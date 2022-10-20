import { FormatPriceProps } from './price.types';

export const formatPrice = (price: number, options?: FormatPriceProps) => {
  const formattedPrice = new Intl.NumberFormat('pl-PL', {
    ...(options?.currency && {
      style: 'currency',
      currency: options.currency,
    }),
    minimumFractionDigits: 2,
  }).format(price);

  return formattedPrice;
};
