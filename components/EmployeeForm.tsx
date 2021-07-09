import useForm from '@hooks/useForm';
import { makeStyles, Grid } from '@material-ui/core';
import Controls from '@components/controls';
import * as employeeService from '@services/employeeService';
interface FormValues {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: string;
  hireDate: Date;
  isPermanent: boolean;
}
const initialFormValues: FormValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};
const genderItems = [
  { value: 'male', label: 'Male' },
  { value: 'femail', label: 'Female' },
  { value: 'other', label: 'Other' },
];
interface EmployeeFormProps {}
const EmployeeForm = ({}: EmployeeFormProps) => {
  const styles = useStyles();
  const { values, setValues, handleInputChange } =
    useForm<FormValues>(initialFormValues);

  return (
    <form className={styles.root} autoComplete="off">
      <Grid container>
        <Grid item xs={6}>
          <Controls.TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />

          <Controls.TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange as any}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={(e, checked: any) => {
              e.target = {
                ...e.target,
                name: e.target.name,
                value: checked,
              };
              // console.log(e.target);
              handleInputChange(e);
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};
export default EmployeeForm;
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));
