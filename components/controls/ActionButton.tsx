import { Button, makeStyles } from '@material-ui/core';
interface ActionButtonProps {
  color: 'primary' | 'secondary';
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ActionButton = ({ color, children, onClick }: ActionButtonProps) => {
  const styles = useStyles();
  return (
    <Button onClick={onClick} className={`${styles.root} ${styles[color]}`}>
      {children}
    </Button>
  );
};
export default ActionButton;
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main,
    },
  },
}));
