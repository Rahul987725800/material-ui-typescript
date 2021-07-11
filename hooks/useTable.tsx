import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
  TablePagination,
} from '@material-ui/core';
import { useState } from 'react';
export default function useTable<T>(
  records: T[] | undefined,
  headCells: {
    id: keyof T;
    label: string;
  }[],
  rowsPerPageOptions = [5, 10, 25]
) {
  const styles = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const recordsAfterPagingAndSorting = () => {
    return records?.slice(rowsPerPage * page, rowsPerPage * (page + 1));
  };
  const MyTable = () => (
    <>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            {headCells.map((cell) => (
              <TableCell key={cell.id as React.Key}>{cell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {recordsAfterPagingAndSorting()?.map((record, i) => (
            <TableRow key={i}>
              {headCells.map((cell) => (
                <TableCell key={cell.id as React.Key}>
                  {record[cell.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        count={records?.length || 0}
        onPageChange={(e, page) => {
          setPage(page);
        }}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(+e.target.value);
        }}
      />
    </>
  );

  return MyTable;
}
const useStyles = makeStyles((theme) => ({
  table: {
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));
