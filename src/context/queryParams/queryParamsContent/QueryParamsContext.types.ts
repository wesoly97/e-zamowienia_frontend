import { Dispatch, SetStateAction, ReactNode } from 'react';

export type Query = Record<string, string | string[] | undefined> & { search?: string };

export type QueryParamsContextState = {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
};

export type QueryParamsContextProps = {
  children: ReactNode;
};
