import { Dispatch, SetStateAction } from 'react';

import { FiltersParamsControllerProps } from '../filtersParamsController/FiltersParamsController.types';

import { FiltersOptionArgs } from '@/api/actions/orders/orders.types';

export type FiltersParamsContextValue = {
  setLimitArg: Dispatch<SetStateAction<Pick<FiltersParamsControllerProps, 'limit'>>>;
  setOffsetArg: Dispatch<SetStateAction<Pick<FiltersParamsControllerProps, 'offset'>>>;
} & Required<FiltersOptionArgs>;
