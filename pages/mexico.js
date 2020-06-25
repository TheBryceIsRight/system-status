import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';

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

function Mexico(props) {
    const { loading = false } = props;
    const classes = useStyles();


    return <Layout>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <PublicIcon className={classes.icon} />
                Mexico
            </Typography>
          </Breadcrumbs>
        <br/>
        <Typography variant="h4">
            {loading ? <Skeleton /> : 'Mexico'}
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default Mexico