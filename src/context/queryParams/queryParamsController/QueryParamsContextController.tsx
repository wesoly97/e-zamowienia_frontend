import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { parse, stringify } from 'qs';

import { Query, QueryParamsContextProps } from '../queryParamsContent/QueryParamsContext.types';
import { QueryParamsContext } from '../queryParamsContent/QueryParamsContext';

export const QueryParamsContextController = ({ children }: QueryParamsContextProps) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState<Query>(parse(search, { ignoreQueryPrefix: true, plainObjects: true }) as Query);

  useEffect(() => {
    navigate(
      pathname +
        stringify(query, {
          arrayFormat: 'brackets',
          encode: false,
          addQueryPrefix: true,
          skipNulls: true,
        }),
      {
        replace: true,
      },
    );
  }, [navigate, pathname, query]);

  return <QueryParamsContext.Provider value={{ query, setQuery }}>{children}</QueryParamsContext.Provider>;
};
