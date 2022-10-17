import { ReactNode } from 'react';

import { FiltersOptionArgs } from '@/api/actions/orders/orders.types';

export type FiltersParamsControllerProps = {
  children: ReactNode;
} & Required<FiltersOptionArgs>;
