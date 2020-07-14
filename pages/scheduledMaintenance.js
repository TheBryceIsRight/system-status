import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BuildIcon from '@material-ui/icons/Build';
import UpdateIcon from '@material-ui/icons/Update';
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


function ScheduledMaintenance(props) {
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

    return <ThemeProvider theme={darkTheme}><Layout>
        <Head>
          <title>Scheduled maintenance for all systems</title>
        </Head>
        <br/>
        <ThemeProvider theme={darkTheme}>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="primary" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <UpdateIcon className={classes.icon} />
                Scheduled Maintenance
            </Typography>
          </Breadcrumbs>
          </ThemeProvider>
        <br/>
        <br/>
        <ThemeProvider theme={darkTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'Scheduled Maintenance'}</Typography>
        </ThemeProvider>
        <br/>
        <br/>
        <CustomTable/>
    </Layout>
    </ThemeProvider>
}

export default ScheduledMaintenance