import { makeStyles, TextField as MuiTextField } from '@material-ui/core';
import { BasicControlProps } from '.';
interface TextFieldProps extends BasicControlProps {
  variant?: 'standard' | 'filled' | 'outlined';
}
const TextField = ({
  variant = 'outlined',
  name,
  label,
  value,
  onChange,
}: TextFieldProps) => {
  const styles = useStyles();
  return (
    <div>
      <MuiTextField
        variant={variant}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default TextField;
const useStyles = makeStyles((theme) => ({}));
