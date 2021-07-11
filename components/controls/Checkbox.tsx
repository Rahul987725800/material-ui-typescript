import {
  FormControl,
  FormControlLabel,
  makeStyles,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import { BasicControlProps, Modify } from '@components/types';
interface CheckboxSpecificProps {
  value: boolean;
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
            onChange={(_, checked) =>
              onChange({
                target: {
                  name,
                  value: checked,
                },
              })
            }
          />
        }
      />
    </FormControl>
  );
};
export default Checkbox;
const useStyles = makeStyles((theme) => ({}));
