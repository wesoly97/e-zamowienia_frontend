import { format } from 'date-fns';

import { FormatDateOptions } from './date.types';
import { parseDate } from './parseDate';

export const formatDate = (date: string, options?: FormatDateOptions) => {
  const opts = Object.assign({}, { isWithTime: false, parser: 'iso' }, options);
  const dateObject = parseDate(date, opts.parser);
  let formatString = 'yyyy-MM-dd';

  if (opts.isWithTime) {
    formatString += ' HH:mm:ss';
  }

  return format(dateObject, formatString);
};
