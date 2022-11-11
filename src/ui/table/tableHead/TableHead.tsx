import { MouseEvent, useMemo } from 'react';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useEffect, useState } from 'react';

import { getStringifySortOption } from './TableHead.utils';
import { TableHeadProps } from './TableHead.types';

import { useParamsContext } from '@/context/params/hooks/useParamsContext';
import { SortValue } from '@/context/params/paramsContext/ParamsContext.types';

export const TableHead = <T,>({ headers, actions }: TableHeadProps<T>) => {
  const { setSort } = useParamsContext();

  const [orderBy, setOrderBy] = useState('title');
  const [order, setOrder] = useState<SortValue>('-1');

  const onChangeSortOrder = (columnId: string) => (_: MouseEvent) => {
    if (order === '1') {
      setOrder('-1');
    }
    if (order === '-1') {
      setOrder('1');
    }

    setOrderBy(columnId);
  };

  const tableHeaders = useMemo(
    () =>
      headers.map(({ id, title }) => (
        <TableCell key={id} sortDirection={orderBy === id ? getStringifySortOption(order) : false}>
          <TableSortLabel
            active={orderBy === id}
            direction={orderBy === id ? getStringifySortOption(order) : 'asc'}
            onClick={onChangeSortOrder(id)}
          >
            {title}
          </TableSortLabel>
        </TableCell>
      )),
    [order, orderBy],
  );

  const actionHeaders = useMemo(() => {
    return actions?.map((_, id) => <TableCell key={id}></TableCell>);
  }, [actions]);

  useEffect(() => {
    setSort(orderBy, order);
  }, [orderBy, order]);

  return (
    <thead>
      <tr>
        {tableHeaders}
        {actionHeaders}
      </tr>
    </thead>
  );
};
