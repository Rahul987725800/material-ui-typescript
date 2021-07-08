import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import SideMenu from '@components/SideMenu';
import Header from '@components/Header';
interface HomeProps {}
const Home = ({}: HomeProps) => {
  const styles = useStyles();
  return (
    <div>
      <SideMenu />
      <div className={classNames(styles.appMain)}>
        <Header />
      </div>
    </div>
  );
};
export default Home;
const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
}));
