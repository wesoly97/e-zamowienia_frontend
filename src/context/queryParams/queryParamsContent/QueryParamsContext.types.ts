import { Dispatch, SetStateAction, ReactNode } from 'react';

export type FilterQuery = Record<string, string | undefined> & { search?: string };

export type SortQuery = Partial<Record<'sort', Record<string, string>>>;

export type Query = Partial<FilterQuery> & SortQuery;

export type QueryParamsContextState = {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
};

export type QueryParamsContextProps = {
  children: ReactNode;
};
