import {
  FormControl,
  FormControlLabel,
  makeStyles,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import { BasicControlProps } from '.';
type Modify<T, R> = Omit<T, keyof R> & R;

interface CheckboxSpecificProps {
  value: boolean;
  onChange:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
}
type CheckboxProps = Modify<BasicControlProps, CheckboxSpecificProps>;
const Checkbox = ({ name, label, value, onChange }: CheckboxProps) => {
  const styles = useStyles();

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={onChange}
          />
        }
      />
    </FormControl>
  );
};
export default Checkbox;
const useStyles = makeStyles((theme) => ({}));
