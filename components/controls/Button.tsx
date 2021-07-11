import {
  makeStyles,
  Button as MuiButton,
  ButtonProps,
} from '@material-ui/core';
// the purpose of creating this Button component was to setup various default values

const Button = ({
  children,
  size = 'large',
  color = 'primary',
  variant = 'contained',
  onClick,
  ...other
}: ButtonProps) => {
  const styles = useStyles();
  return (
    <MuiButton
      classes={{
        root: styles.root,
        label: styles.label,
      }}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
};
export default Button;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'none',
  },
}));
