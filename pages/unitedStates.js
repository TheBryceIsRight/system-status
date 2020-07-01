import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import PublicIcon from '@material-ui/icons/Public';
import Head from 'next/head'


let responsiveTheme = createMuiTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

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
    typography: {
      color: 'black',
    },


  }));


  
function UnitedStates(props) {
    const { loading = false } = props;
    const classes = useStyles();
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/unitedStatesMap' ), {
        ssr: false
      });

    return <Layout>
      <Head>
        <title>Status of systems in the United States</title>
      </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <PublicIcon className={classes.icon} />
                United States
            </Typography>
          </Breadcrumbs>
        <br/>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'United States'}</Typography>
        </ThemeProvider>
        <br/>
        <br/>
          <DynamicComponentWithNoSSR/>
    </Layout>
}

export default UnitedStates