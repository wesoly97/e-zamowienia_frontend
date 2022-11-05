import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useEffect, useState } from 'react';

import { tableColumnNames } from './TableHead.constans';
import { getStringifySortOption } from './TableHead.utils';

import { useFiltersParamsContext } from '@/context/filtersParams/hooks/useFiltersParamsContext';

export const TableHead = () => {
  const { setFilter } = useFiltersParamsContext();

  const [orderBy, setOrderBy] = useState('sort_title');
  const [order, setOrder] = useState<-1 | 1>(-1);

  const onChangeSortOrder = (columnId: string) => (_: React.MouseEvent<unknown>) => {
    if (order === 1) {
      setOrder(-1);
    } else {
      setOrder(1);
    }
    setOrderBy(columnId);
  };

  useEffect(() => {
    setFilter(orderBy, String(order));
  }, [order, orderBy]);

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
