import { MouseEvent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useEffect, useState } from 'react';

import { tableColumnNames } from './TableHead.constans';
import { getStringifySortOption } from './TableHead.utils';

import { useParamsContext } from '@/context/params/hooks/useParamsContext';
import { SortValue } from '@/context/params/paramsContext/ParamsContext.types';

export const TableHead = () => {
  const { setSort } = useParamsContext();

  const [orderBy, setOrderBy] = useState('title');
  const [order, setOrder] = useState<SortValue>('-1');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onChangeSortOrder = (columnId: string) => (_: MouseEvent) => {
    if (order === '1') {
      setOrder('-1');
    }
    if (order === '-1') {
      setOrder('1');
    }

    setOrderBy(columnId);
  };

  useEffect(() => {
    setSort(orderBy, order);
  }, [orderBy, order]);

  return (
    <thead>
      <tr>
        {tableColumnNames.map(({ id, title }) => (
          <TableCell key={id} sortDirection={orderBy === id ? getStringifySortOption(order) : false}>
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? getStringifySortOption(order) : 'asc'}
              onClick={onChangeSortOrder(id)}
            >
              {title}
            </TableSortLabel>
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};
