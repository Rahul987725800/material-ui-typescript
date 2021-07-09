import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import SideMenu from '@components/SideMenu';
import Header from '@components/Header';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '@components/PageHeader';
interface HomeProps {}
const Home = ({}: HomeProps) => {
  const styles = useStyles();
  return (
    <div>
      <SideMenu />
      <div className={classNames(styles.appMain)}>
        <Header />
        <PageHeader
          title="Page Header"
          subTitle="subtitle"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
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
