import useForm from '@hooks/useForm';
import { makeStyles, Grid } from '@material-ui/core';
import Controls from '@components/controls';
import * as employeeService from '@services/employeeService';
import { EmployeeType } from './types';
import { useEffect } from 'react';
const initialFormValues: EmployeeType = {
  id: -1,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: -1,
  hireDate: new Date(),
  isPermanent: false,
};
const genderItems = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];
interface EmployeeFormProps {
  addOrEditEmployee: (employee: EmployeeType, resetForm: () => void) => void;
  employeeForEdit?: EmployeeType | null;
}
const EmployeeForm = ({
  addOrEditEmployee,
  employeeForEdit,
}: EmployeeFormProps) => {
  const styles = useStyles();
  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm<EmployeeType>(initialFormValues, validate, true);
  useEffect(() => {
    if (employeeForEdit) {
      setValues({
        ...employeeForEdit,
      });
    }
  }, [employeeForEdit, setValues]);
  function validate(formValues: EmployeeType = values) {
    const temp: typeof errors = {};
    let key: keyof EmployeeType;
    for (key in errors) {
      // this is done so that when validating single value we don't loose
      // other field errors
      temp[key] = errors[key];
    }
    if ('fullName' in formValues)
      temp.fullName = formValues.fullName ? '' : 'This field is required';
    if ('email' in formValues)
      temp.email = /$^|.+@.+\..+/.test(formValues.email)
        ? ''
        : 'Invalid email format';
    if ('mobile' in formValues)
      temp.mobile =
        formValues.mobile.length > 9 ? '' : 'Minimum mobile length 9';
    if ('departmentId' in formValues)
      temp.departmentId =
        formValues.departmentId !== -1 ? '' : 'Please select the department';
    setErrors(temp);

    return Object.values(temp).every((x) => !x);
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEditEmployee(values, resetForm);
    }
  };
  return (
    <form className={styles.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.TextField
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
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
            error={errors.departmentId}
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
            <Controls.Button color="default" onClick={resetForm}>
              Reset
            </Controls.Button>
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
