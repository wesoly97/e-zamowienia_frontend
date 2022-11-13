import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { parse, stringify } from 'qs';

import { Query, QueryParamsContextProps } from '../queryParamsContent/QueryParamsContext.types';
import { QueryParamsContext } from '../queryParamsContent/QueryParamsContext';

export const QueryParamsContextController = ({ children }: QueryParamsContextProps) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState<Query>(parse(search, { ignoreQueryPrefix: true }) as Query);

  useEffect(() => {
    setQuery(parse(search, { ignoreQueryPrefix: true }) as Query);
  }, [search]);

  useEffect(() => {
    const queryUrl = stringify(query, {
      arrayFormat: 'brackets',
      encode: false,
      addQueryPrefix: true,
      skipNulls: true,
    });

    if (!!queryUrl) {
      navigate(pathname + queryUrl, { replace: true });
    }
  }, [pathname, query]);

  return <QueryParamsContext.Provider value={{ query, setQuery }}>{children}</QueryParamsContext.Provider>;
};
