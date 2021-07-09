import {
  makeStyles,
  FormControl,
  Select as MuiSelect,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { BasicControlProps } from '.';
interface SelectProps extends Omit<BasicControlProps, 'onChange'> {
  options: {
    id: number;
    title: string;
  }[];
  onChange:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;
}
const Select = ({ name, label, value, onChange, options }: SelectProps) => {
  const styles = useStyles();
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
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
