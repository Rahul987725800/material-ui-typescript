import {
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
interface RadioGroupProps {
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  items: {
    value: string;
    label: string;
  }[];
}
const RadioGroup = ({
  name,
  label,
  value,
  onChange,
  items,
}: RadioGroupProps) => {
  const styles = useStyles();
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, i) => {
          return (
            <FormControlLabel
              key={i}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};
export default RadioGroup;
const useStyles = makeStyles((theme) => ({}));
