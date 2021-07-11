import {
  makeStyles,
  TextField as MuiTextField,
  TextFieldProps,
} from '@material-ui/core';

const TextField = ({
  variant = 'outlined',
  name,
  label,
  value,
  onChange,
  error = '',
  ...other
}: Omit<TextFieldProps, 'error'> & { error?: string }) => {
  const styles = useStyles();
  return (
    <MuiTextField
      variant={variant}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      {...other}
    />
  );
};
export default TextField;
const useStyles = makeStyles((theme) => ({}));
