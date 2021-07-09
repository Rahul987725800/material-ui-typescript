import { makeStyles, Paper } from '@material-ui/core';
import EmployeeForm from '@components/EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '@components/PageHeader';
interface EmployeesProps {}
const Employees = ({}: EmployeesProps) => {
  const styles = useStyles();
  return (
    <div>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={styles.form}>
        <EmployeeForm />
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
