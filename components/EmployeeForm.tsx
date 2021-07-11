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
  { value: 'female', label: 'Female' },
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
          <Controls.TextField
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.TextField
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
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
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <p
            onClick={() => {
              console.log(values);
            }}
          >
            print
          </p>
          <div>
            <Controls.Button type="submit">Submit</Controls.Button>
            <Controls.Button color="default">Reset</Controls.Button>
          </div>
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
