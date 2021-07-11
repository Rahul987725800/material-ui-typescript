import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core';
import EmployeeForm from '@components/EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '@components/PageHeader';
import Table from '@components/Table';
import * as employeeService from '@services/employeeService';
import { useState } from 'react';
import { EmployeeType } from './types';
import { useEffect } from 'react';
import Controls from './controls';
import Search from '@material-ui/icons/Search';

interface EmployeesProps {}
const headCells: {
  id: keyof EmployeeType;
  label: string;
  disableSorting?: boolean;
}[] = [
  {
    id: 'fullName',
    label: 'Employee Name',
  },
  {
    id: 'email',
    label: 'Email Address (Personal)',
  },
  {
    id: 'mobile',
    label: 'Mobile Number',
  },
  {
    id: 'department',
    label: 'Department',
    disableSorting: true,
  },
];
const Employees = ({}: EmployeesProps) => {
  const styles = useStyles();
  const [employees, setEmployees] = useState<EmployeeType[]>();
  const [filterFunction, setFilterFunction] =
    useState<{ func: (items: EmployeeType[]) => EmployeeType[] }>();
  useEffect(() => {
    setEmployees(employeeService.getAllEmployees());
  }, []);
  const handleSearch: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    let target = e.target;
    setFilterFunction({
      func: (items: EmployeeType[]) => {
        if (target.value === '') return items;
        else
          return items.filter((item) =>
            item.fullName.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };
  return (
    <div>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={styles.pageContent}>
        <Toolbar className={styles.bar}>
          <Controls.TextField
            label="Search Employees"
            className={styles.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          ></Controls.TextField>
        </Toolbar>
        {/* <EmployeeForm /> */}
        <Table
          records={employees}
          headCells={headCells}
          filter={filterFunction?.func}
        />
      </Paper>
    </div>
  );
};
export default Employees;
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    // border: '1px solid red',
  },
  bar: {
    // border: '1px solid blue',
  },
  searchInput: {
    width: '75%',
  },
}));
