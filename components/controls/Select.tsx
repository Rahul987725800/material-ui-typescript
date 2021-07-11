import { EventType } from '@components/types';
import {
  makeStyles,
  FormControl,
  Select as MuiSelect,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { BasicControlProps } from '@components/types';
interface SelectProps extends BasicControlProps {
  options: {
    id: number;
    title: string;
  }[];
}
const Select = ({ name, label, value, onChange, options }: SelectProps) => {
  const styles = useStyles();
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e as EventType)}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((option, i) => {
          return (
            <MenuItem key={i} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};
export default Select;
const useStyles = makeStyles((theme) => ({}));
