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
import SmsIcon from '@material-ui/icons/Sms';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DoneIcon from '@material-ui/icons/Done';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import PublicIcon from '@material-ui/icons/Public';
import Head from 'next/head'
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

function PrototypeDetails(props) {
    const { loading = false } = props;
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
        ssr: false
      });
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };

    
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
            main: '#FFFFFF',
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


    return <ThemeProvider theme={darkTheme}><Layout>
        <Head>
          <title>
            Item Details
          </title>
        </Head>
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
          <br/>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'Item Details'}</Typography>
        </ThemeProvider>
        <br/>
        <br/>
          <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader">
              Issue Details
            </ListSubheader>
          }
          >
            <ListItem>
              <ListItemIcon>
                <ThemeProvider theme={theme}>
                <SmsIcon color="primary" />
                </ThemeProvider>
              </ListItemIcon>
              <ListItemText primary="System Name" secondary='System 1'/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DonutLargeIcon />
              </ListItemIcon>
              <ListItemText primary="System Status" secondary='Available'  />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ModeCommentIcon />
              </ListItemIcon>
              <ListItemText primary="Issue Name" secondary='Issue 1'  />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Issue Status" secondary='Scheduled for maintenance' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary="Start Time" secondary='6/26/2020 12:00 PM EST' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlightLandIcon />
              </ListItemIcon>
              <ListItemText primary="Expected Resolution"  secondary='6/26/2020 6:00 PM EST'/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Resolution" secondary='Pending maintenance completion'/>
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Description" secondary="1 update posted 37 min ago" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Preparing to take system offline for maintenance" secondary='6/26/2020 9:16 PM EST' />
                </ListItem>
                <ListItem className={classes.nested}>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Issue moved to priority maintenance queue" secondary='6/25/2020 5:27 PM EST' />
                </ListItem>
                <ListItem className={classes.nested}>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Issue logged" secondary='6/25/2020 4:13 PM EST'/>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
    </Layout>
  </ThemeProvider>
}

export default PrototypeDetails