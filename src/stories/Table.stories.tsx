import { Meta, Story } from '@storybook/react';
import { TableCell } from '@mui/material';

import { Table } from '@/ui/table/Table';
import { TableProps } from '@/ui/table/Tables.types';

export default {
  title: 'Table',
  component: Table,
} as Meta;

type DataProps = {
  name: string;
  calories: number;
  fat: number;
};

const rows: DataProps[] = [
  { name: 'Cupcake', calories: 305, fat: 3.7 },
  { name: 'Donut', calories: 452, fat: 25.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0 },
  { name: 'Gingerbread', calories: 356, fat: 16.0 },
  { name: 'Honeycomb', calories: 408, fat: 3.2 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Jelly Bean', calories: 375, fat: 0.0 },
  { name: 'KitKat', calories: 518, fat: 26.0 },
  { name: 'Lollipop', calories: 392, fat: 0.2 },
  { name: 'Marshmallow', calories: 318, fat: 0 },
  { name: 'Nougat', calories: 360, fat: 19.0 },
  { name: 'Oreo', calories: 437, fat: 18.0 },
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<any> = <T,>({ ...props }: TableProps<T>) => <Table {...props} />;

export const Default = Template.bind({});
Default.args = {
  rows: rows,
  keyExtractor: ({ name }: DataProps) => name,
  renderRow: ({ name, calories, fat }: DataProps) => (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{calories}</TableCell>
      <TableCell>{fat}</TableCell>
    </>
  ),
};
