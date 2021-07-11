import { EventType } from '@components/types';
import {
  makeStyles,
  FormControl,
  Select as MuiSelect,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { BasicControlProps } from '@components/types';
interface SelectProps extends Omit<BasicControlProps, 'value'> {
  options: {
    id: number;
    title: string;
  }[];
  value: number;
  error?: string;
}
const Select = ({
  name,
  label,
  value,
  onChange,
  options,
  error = '',
}: SelectProps) => {
  const styles = useStyles();
  return (
    // error can be given to MuiSelect or FormControl
    <FormControl variant="outlined" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e as EventType)}
      >
        <MenuItem value={0}>None</MenuItem>
        {options.map((option, i) => {
          return (
            <MenuItem key={i} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
export default Select;
const useStyles = makeStyles((theme) => ({}));
