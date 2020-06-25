import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.3),
      width: 20,
      height: 20,
    },
  }));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function PrototypeDetails(props) {
    const { loading = false } = props;
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
        ssr: false
      });
    const classes = useStyles();


    return <Layout>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Link
              color="inherit"
              href="/activeIssues"
              className={classes.link}
            >
              <ErrorIcon className={classes.icon} />
              Active Issues
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <DescriptionIcon className={classes.icon} />
              Details
            </Typography>
          </Breadcrumbs>
          <br/>  
        <Typography variant="h4">
            {loading ? <Skeleton /> : 'Details (demo)'}
        </Typography>
        <br/>
        <DynamicComponentWithNoSSR/>
    </Layout>
}

export default PrototypeDetails