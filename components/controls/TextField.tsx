import { makeStyles, TextField as MuiTextField } from '@material-ui/core';
interface TextFieldProps {
  variant?: 'standard' | 'filled' | 'outlined';
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
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
