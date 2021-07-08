import { makeStyles } from '@material-ui/core';
interface SideMenuProps {}
const SideMenu = ({}: SideMenuProps) => {
  const styles = useStyles();
  return <div className={styles.sideMenu}></div>;
};
export default SideMenu;
const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
  },
}));
