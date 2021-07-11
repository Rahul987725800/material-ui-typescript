import { makeStyles } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BasicControlProps } from '@components/types';
interface DatePickerProps extends Omit<BasicControlProps, 'value'> {
  value: Date;
}
const DatePicker = ({ name, label, value, onChange }: DatePickerProps) => {
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => {
          onChange({
            target: {
              name,
              value: date,
            },
          });
        }}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};
export default DatePicker;
const useStyles = makeStyles((theme) => ({}));
