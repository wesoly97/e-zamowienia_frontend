export const isNumber = (number: string): number is string => {
  return typeof Number(number) === 'number';
};
