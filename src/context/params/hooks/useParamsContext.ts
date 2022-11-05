import { useContext } from 'react';

import { ParamsContext } from '../paramsContext/ParamsContext';

export const useParamsContext = () => {
  const ctx = useContext(ParamsContext);

  if (!ctx) {
    throw new Error(
      'useParamsContext hook is not wrapped by ParamsContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
