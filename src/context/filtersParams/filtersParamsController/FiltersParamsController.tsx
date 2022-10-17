import { useMemo, useState } from 'react';

import { FiltersParamsContext } from '../filtersParamsContext/FiltersParamsContext';
import { FiltersParamsContextValue } from '../filtersParamsContext/FiltersParamsContext.types';

import { FiltersParamsControllerProps } from './FiltersParamsController.types';

export const FiltersParamsController = ({ children, limit, offset }: FiltersParamsControllerProps) => {
  const [limitArg, setLimitArg] = useState<Pick<FiltersParamsControllerProps, 'limit'>>(limit);
  const [offsetArg, setOffsetArg] = useState<Pick<FiltersParamsControllerProps, 'offset'>>(offset);

  const value = useMemo<FiltersParamsContextValue>(
    () => ({
      limit: limitArg,
      offset: offsetArg,
      setLimitArg,
      setOffsetArg,
    }),
    [limitArg, offsetArg],
  );

  return <FiltersParamsContext.Provider value={value}>{children}</FiltersParamsContext.Provider>;
};
