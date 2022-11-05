import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { useEffect, useState } from 'react';

import { tableColumnNames } from './TableHead.constans';
import { getStringifySortOption } from './TableHead.utils';

import { useFiltersParamsContext } from '@/context/filtersParams/hooks/useFiltersParamsContext';

export const TableHead = () => {
  const { setParam } = useFiltersParamsContext();

  const [orderBy, setOrderBy] = useState('sort_title');
  const [order, setOrder] = useState<-1 | 1>(-1);

  const createSortHandler = (property: string) => (_: React.MouseEvent<unknown>) => {
    if (order === 1) {
      setOrder(-1);
    } else {
      setOrder(1);
    }
    setOrderBy(property);
  };

  useEffect(() => {
    setParam(orderBy, String(order));
  }, [orderBy]);

  return (
    <thead>
      <tr>
        {tableColumnNames.map(({ id, title }) => (
          <TableCell key={id} sortDirection={orderBy === id ? getStringifySortOption(order) : false}>
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? getStringifySortOption(order) : 'asc'}
              onClick={createSortHandler(id)}
            >
              {title}
              {orderBy === id ? (
                <Box component="span" sx={visuallyHidden}>
                  {getStringifySortOption(order) === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};
