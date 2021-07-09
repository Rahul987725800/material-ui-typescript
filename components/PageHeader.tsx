import { makeStyles, Paper, Card, Typography } from '@material-ui/core';
interface PageHeaderProps {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}
const PageHeader = ({ icon, title, subTitle }: PageHeaderProps) => {
  const styles = useStyles();
  return (
    <Paper elevation={0} square className={styles.root}>
      <div className={styles.pageHeader}>
        <Card className={styles.pageIcon}>{icon}</Card>
        <div className={styles.pageContent}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};
export default PageHeader;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    margin: theme.spacing(2),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1',
  },
  pageContent: {
    paddingLeft: theme.spacing(4),
    '& .MuiTypography-subtitle2': {
      opacity: 0.6,
    },
  },
}));
