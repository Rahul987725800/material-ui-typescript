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
import AddIcon from '@material-ui/icons/Add';
import PageHeader from '@components/PageHeader';
import Table from '@components/Table';
import * as employeeService from '@services/employeeService';
import { useState } from 'react';
import { EmployeeType, NotificationType } from './types';
import { useEffect } from 'react';
import Controls from './controls';
import Search from '@material-ui/icons/Search';
import Popup from './Popup';
import Notification from './Notification';
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
  const [showPopup, setShowPopup] = useState(false);
  const [employeeForEdit, setEmployeeForEdit] = useState<EmployeeType | null>();
  const [notify, setNotify] = useState<NotificationType>({
    isOpen: false,
  });
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
  const openInPopup = (employee: EmployeeType) => {
    setEmployeeForEdit(employee);
    setShowPopup(true);
  };
  const addOrEditEmployee = (employee: EmployeeType, resetForm: () => void) => {
    if (employee.id === -1) {
      employeeService.insertEmployee(employee);
    } else {
      employeeService.updateEmployee(employee);
    }
    resetForm();
    setEmployeeForEdit(null);
    setShowPopup(false);
    setEmployees(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Submitted successfully',
      type: 'success',
    });
  };
  const deleteEmployee = (employeeId: EmployeeType['id']) => {
    employeeService.deleteEmployee(employeeId);
    setEmployees(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Deleted successfully',
      type: 'error',
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
          <Controls.Button
            variant="outlined"
            startIcon={<AddIcon />}
            className={styles.newButton}
            onClick={() => {
              setEmployeeForEdit(null);
              setShowPopup(true);
            }}
          >
            Add New
          </Controls.Button>
        </Toolbar>

        <Table
          records={employees}
          headCells={headCells}
          filter={filterFunction?.func}
          setRecordForUpdate={openInPopup}
          deleteRecord={(record) => deleteEmployee(record.id)}
        />
      </Paper>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        title="Employee Form"
      >
        <EmployeeForm
          addOrEditEmployee={addOrEditEmployee}
          employeeForEdit={employeeForEdit}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
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
  newButton: {
    marginLeft: 'auto',
  },
}));
