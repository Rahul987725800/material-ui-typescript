import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

interface IndexProps {}
const Index = ({}: IndexProps) => {
  const styles = useStyles();
  return (
    <div>
      <h1>Index</h1>
      <Link href="/home">Home</Link>
    </div>
  );
};
export default Index;
const useStyles = makeStyles((theme) => ({}));
