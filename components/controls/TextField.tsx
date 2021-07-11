import { BasicControlProps } from '@components/types';
import { makeStyles, TextField as MuiTextField } from '@material-ui/core';
interface TextFieldProps extends BasicControlProps {
  variant: 'outlined' | 'standard' | 'filled';
  error?: string;
}
const TextField = ({
  variant = 'outlined',
  name,
  label,
  value,
  onChange,
  error = '',
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
        error={!!error}
        helperText={error}
      />
    </div>
  );
};
export default TextField;
const useStyles = makeStyles((theme) => ({}));
