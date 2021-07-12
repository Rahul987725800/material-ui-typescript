import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Controls from '@components/controls';
import CloseIcon from '@material-ui/icons/Close';
interface PopupProps {
  title: string;
  children: JSX.Element;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Popup = ({ title, children, showPopup, setShowPopup }: PopupProps) => {
  const styles = useStyles();
  return (
    <Dialog
      open={showPopup}
      maxWidth="md"
      classes={{
        paper: styles.paper,
      }}
    >
      <DialogTitle>
        <div className={styles.title}>
          <Typography variant="h6" component="p">
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => setShowPopup(false)}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
export default Popup;
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
