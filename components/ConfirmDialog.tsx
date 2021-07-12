import {
  Dialog,
  makeStyles,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import Controls from './controls';
import { ConfirmDialogType } from './types';
interface ConfirmDialogProps {
  confirmDialog: ConfirmDialogType;
  setConfirmDialog: React.Dispatch<React.SetStateAction<ConfirmDialogType>>;
}
const ConfirmDialog = ({
  confirmDialog,
  setConfirmDialog,
}: ConfirmDialogProps) => {
  const styles = useStyles();
  return (
    <Dialog
      open={confirmDialog.isOpen}
      classes={{
        paper: styles.dialogPaper,
      }}
    >
      <DialogTitle>
        <IconButton disableRipple className={styles.icon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Controls.Button
          color="default"
          size="medium"
          onClick={() => {
            setConfirmDialog({
              isOpen: false,
            });
          }}
        >
          No
        </Controls.Button>
        <Controls.Button
          color="secondary"
          size="medium"
          onClick={() => {
            confirmDialog.onConfirm?.();
            setConfirmDialog({
              isOpen: false,
            });
          }}
        >
          Yes
        </Controls.Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    '& .MuiDialogActions-root': {
      justifyContent: 'center',
    },
  },
  icon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,

    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3rem',
    },
  },
}));
