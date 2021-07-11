import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import EmployeeForm from '@components/EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '@components/PageHeader';
import useTable from '@hooks/useTable';
import * as employeeService from '@services/employeeService';
import { useState } from 'react';
import { EmployeeType } from './types';
import { useEffect } from 'react';

interface EmployeesProps {}
const headCells: {
  id: keyof EmployeeType;
  label: string;
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
  },
];
const Employees = ({}: EmployeesProps) => {
  const styles = useStyles();
  const [employees, setEmployees] = useState<EmployeeType[]>();
  useEffect(() => {
    setEmployees(employeeService.getAllEmployees());
  }, []);
  const Table = useTable<EmployeeType>(employees, headCells);
  return (
    <div>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={styles.form}>
        {/* <EmployeeForm /> */}
        <Table />
      </Paper>
    </div>
  );
};
export default Employees;
const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
