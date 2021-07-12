import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { NotificationType } from './types';
interface NotificationProps {
  notify: NotificationType;
  setNotify: React.Dispatch<React.SetStateAction<NotificationType>>;
}
const Notification = ({ notify, setNotify }: NotificationProps) => {
  const styles = useStyles();
  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={styles.root}
      onClose={(e, reason) => {
        // reason can be clickaway or timeout
        // console.log(reason);
        if (reason === 'timeout')
          setNotify({
            isOpen: false,
          });
      }}
    >
      {/* onClose is necessary to show the cross button */}
      <Alert
        onClose={(e) => {
          setNotify({
            isOpen: false,
          });
        }}
        severity={notify.type}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));
