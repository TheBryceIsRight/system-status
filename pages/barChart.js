import data from '../components/data';
import BugReportIcon from '@material-ui/icons/BugReport';  

import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import WorkLifeBalance from "../components/WorkLifeBalance";
import CardChart from "../components/cardChart";
import Head from 'next/head'
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'

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
  }));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


function LineChart(props) {
    const { loading = false } = props;
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
        ssr: false
      });
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };


    return <Layout>
        <Head>
          <title>
            A page for debugging data visualization solutions
          </title>
        </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <BugReportIcon className={classes.icon} />
              Chart Debugging
            </Typography>
          </Breadcrumbs>
          <br/>  
          <ThemeProvider theme={responsiveTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'Data Vis'}</Typography>
        </ThemeProvider>
        <br/>
        <div className="App">
            <div className="Chart">
                <WorkLifeBalance/>
            </div>
        </div>
        <br/>      
        <div className="App">
            <div className="Chart">
                <CardChart/>
            </div>
        </div> 
          
    </Layout>

}

export default LineChart

