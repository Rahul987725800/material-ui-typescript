import RadioGroup from './RadioGroup';
import TextField from './TextField';
import Select from './Select';
import Checkbox from './Checkbox';
export interface BasicControlProps {
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
const Controls = {
  RadioGroup,
  TextField,
  Select,
  Checkbox,
};
export default Controls;
