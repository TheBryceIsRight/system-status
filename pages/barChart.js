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
import React, { useState }  from 'react'



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
  const [darkState, setDarkState] = useState(true);
  const [color, setColor] = React.useState('dark');
  
  const handleChange1 = (event) => {
    setColor(event.target.checked ? 'dark' : 'light');
  };
  
  const handleThemeChange = () => {
    setColor(event.target.checked ? 'dark' : 'light');
    setDarkState(!darkState);
  };
  
  const theme = React.useMemo(() => {
  if (color === 'dark') {
    return createMuiTheme({
      palette: {
        primary: {
          main: '#B1ECE2',
          contrastText: '#B1ECE2',
          borderColor: '#B1ECE2',
        },
        secondary: {
          main: '#7E9EF5',
          contrastText: '#1A1B36',
        },
      },
    });
  }
  if (color === 'light') {
    return createMuiTheme({
      palette: {
        primary: {
          main: '#2F8A6F',
          contrastText: '#2F8A6F',
          borderColor: '#2F8A6F',
        },
        secondary: {
          main: '#1A1B36',
          contrastText: '#fff',
        },
      },
    });
  }
  
  return createMuiTheme();
  }, [color]);
  
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#FFF': '#1A1B36';
  const mainSecondaryColor = darkState ? '#FFF' : '#1A1B36';
  const mainTertiaryColor = darkState ? '#FFF' : '#1A1B36';
  const mainLinkColor = darkState ? '#7E9EF5' : '#1A1B36';
  const mainButtonColor = darkState ? '#FFF' : '#1A1B36';
  const mainBackgroundColor = darkState ? '#1A1B36' : '#FFF';
  const mainGreenColor = darkState ? '#2ABD91' : '#B1ECE2';
  
  let darkTheme = createMuiTheme({
  palette: {
    type: palletType,
    primary: {
      main: mainPrimaryColor
    },
    secondary: {
      main: mainSecondaryColor
    },
    tertiary: {
      main: mainTertiaryColor
    },
    linkColor: {
      main: mainLinkColor
    },
    button: {
      main: mainButtonColor
    },
    background: {
      default: mainBackgroundColor
    },
    green: {
      main: mainGreenColor
    },
    MuiListItemText: {
      primary: {
        color: mainPrimaryColor
      }
    }
  }
  });
  
  darkTheme = responsiveFontSizes(darkTheme);
  


    const { loading = false } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };


    return <ThemeProvider theme={darkTheme}
    ><Layout>
        <Head>
          <title>
            Chart debugging
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
    </ThemeProvider>
}

export default LineChart

