import {
  Table as MuiTable,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
  TablePagination,
  TableSortLabel,
} from '@material-ui/core';
import { useState, useRef, useEffect } from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Controls from '@components/controls';
// this table provides paging, sorting, filtering functionality
interface TableProps<T> {
  records: T[] | undefined;
  headCells: {
    id: keyof T;
    label: string;
    disableSorting?: boolean;
  }[];
  rowsPerPageOptions?: number[];
  filter?: (items: T[]) => T[];
  openInPopup?: (record: T) => void;
}
export default function Table<T>({
  records,
  headCells,
  rowsPerPageOptions = [5, 10, 25],
  filter = (items) => items,
  openInPopup,
}: TableProps<T>) {
  const styles = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [rowsPerPageCopy, setRowsPerPageCopy] = useState(rowsPerPage);
  const [order, setOrder] = useState<'asc' | 'desc'>();
  const [orderBy, setOrderBy] = useState<keyof T>();
  useEffect(() => {
    // console.log('nextrowsperpage', rowsPerPage);
    const topEntryNum = rowsPerPageCopy * page + 1;
    let newPage = 0;
    while ((newPage + 1) * rowsPerPage < topEntryNum) newPage++;
    setPage(newPage);
    setRowsPerPageCopy(rowsPerPage);
  }, [rowsPerPage]);
  function getComparator() {
    return order === 'asc'
      ? (a: T, b: T) => ascendingComparator(a, b)
      : (a: T, b: T) => -ascendingComparator(a, b);
  }
  function ascendingComparator(a: T, b: T) {
    if (!orderBy) return 0;
    if (a[orderBy] < b[orderBy]) {
      return -1;
    } else if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }
  function sort<T>(arr: T[], comparator: (a: T, b: T) => number) {
    return arr.sort(comparator);
  }
  const recordsAfterPagingAndSorting = () => {
    if (records)
      return sort<T>(filter(records), getComparator()).slice(
        rowsPerPage * page,
        rowsPerPage * (page + 1)
      );
  };
  const handleSortRequest = (cellId: keyof T) => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  };

  return (
    <>
      <MuiTable className={styles.table}>
        <TableHead>
          <TableRow>
            {headCells.map(({ id, label, disableSorting }) => (
              <TableCell
                key={id as React.Key}
                sortDirection={orderBy === id ? order : false}
              >
                {disableSorting ? (
                  label
                ) : (
                  <TableSortLabel
                    active={orderBy === id}
                    onClick={() => {
                      handleSortRequest(id);
                    }}
                    direction={orderBy === id ? order : 'asc'}
                  >
                    {label}
                  </TableSortLabel>
                )}
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
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
              <TableCell className={styles.buttons}>
                <Controls.ActionButton
                  color="primary"
                  onClick={() => openInPopup?.(record)}
                >
                  <EditOutlinedIcon />
                </Controls.ActionButton>
                <Controls.ActionButton color="secondary">
                  <CloseOutlinedIcon />
                </Controls.ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPageCopy}
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
  buttons: {
    display: 'flex',
    gap: 10,
  },
}));
