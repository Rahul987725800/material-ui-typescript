import {
  AppBar,
  makeStyles,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              startAdornment={<SearchIcon fontSize="small" />}
              className={styles.searchInput}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton
              classes={{ root: styles.btnRoot, label: styles.btnLabel }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
  searchInput: {
    opacity: '.6',
    padding: '0px 8px',
    fontSize: '.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  },
  btnRoot: {
    backgroundColor: 'green',
  },
  btnLabel: {
    backgroundColor: 'orange',
  },
}));
