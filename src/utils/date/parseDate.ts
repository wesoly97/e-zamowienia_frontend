import { parse } from 'date-fns';

export const parseDate = (date: string, parser: string): Date => {
  if (parser === 'iso') {
    return new Date(new Date(date).toISOString().slice(0, -1));
  }

  return parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
};
