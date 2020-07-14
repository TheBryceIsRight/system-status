import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Drawer from '@material-ui/core/Drawer';  
import clsx from 'clsx';

import React, { useState }  from 'react'
import render from 'react-dom'
import { createMuiTheme, fade, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import { MemoryRouter as Router } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import { withTheme } from '@material-ui/core/styles'
import Checkbox from '../node_modules/@material-ui/core/Checkbox'
import { green } from '../node_modules/@material-ui/core/colors'
import CheckCircle from '@material-ui/icons/CheckCircle'

import Warning from '@material-ui/icons/Warning'
import Error from '@material-ui/icons/Error'
import BuildIcon from '@material-ui/icons/Build';
import dynamic from 'next/dynamic';
import Copyright from '../components/copyright';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PolicyIcon from '@material-ui/icons/Policy';
import PublicIcon from '@material-ui/icons/Public';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MaterialLink from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import StarIcon from '@material-ui/icons/Star';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
  grey
} from "@material-ui/core/colors";
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AssessmentIcon from '@material-ui/icons/Assessment';
import UpdateIcon from '@material-ui/icons/Update';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BugReportIcon from '@material-ui/icons/BugReport';  
import { blue } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#40BBEF'
  },
  iconHover: {
    color: '#73D6F9',
  },
})(Rating);

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  checked: {},
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const useStyle1 = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const useStyles2 = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.35),
    width: 20,
    height: 20,
  },
}));

const useStyles3 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const useStyles4 = makeStyles((theme) => ({
  body: {
    margin:0,
  },

  list: {
      width: 'auto',
    },
    fullList: {
      width: 'auto',
    },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
  ssr: false
});


export default function Home({ allPostsData }, props) {

  //dark mode stuff

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
  const mainTertiaryColor = darkState ? lightBlue[500] : grey[500];
  const mainLinkColor = darkState ? '#7E9EF5' : '#1A1B36';
  const mainButtonColor = darkState ? deepOrange[900] : '#7E9EF5';
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


  const StyledButton = withStyles((darkTheme) => ({
    root: {
      color: 'primary',
      backgroundColor: 'primary',
      borderRadius: 3,
      border: 2,
      height: 48,
      fontSize: '100px', 
      maxWidth: '180px', 
      maxHeight: '180px', 
      minWidth: '180px', 
      minHeight: '180px',
      '&:hover': {
        backgroundColor: '#2C2E57',
      },
    },
    label: {
      textTransform: 'capitalize',
    }
  }))(Button);

  {/* 
    <Button startIcon={<CheckCircle/>} variant='outlined' 
    style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>United States
    </Button>
  */}

  const AvailableButton = withStyles((darkTheme) => ({
    
    root: {
      '&:hover': {
        backgroundColor: '#2C2E57',
      },
    },
    label: {
      textTransform: 'capitalize',
    }
  }))(Button);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const classes1 = useStyle1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const { loading = false } = props;


  {/*Top App Bar stuff */}
  const classes4 = useStyles4();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  
  const renderMenu = (
    
      <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      >
      <Link
          href="/profile"
          passHref>
          <MenuItem>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
      <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
      <MenuItem>
          
          <IconButton aria-label="show 1 new notifications" color="primary">
          <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
          </Badge>
          </IconButton>
          <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
          >
          <AccountCircle />
          </IconButton>
          <p>Profile</p>
      </MenuItem>
      </Menu>
  );

  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
      checkedA: true,
      checkedB: true,
  });

  const handleChange = (event) => {
      setState(event.target.checked ? 'dark' : 'light');
      setColor(event.target.checked ? 'dark' : 'light');
    };

  const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
      }

      setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
      <div
      className={clsx(classes4.list, {
          [classes4.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      //role="navigation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
      <Router>
      <List>
          <ListItem button>
              <ListItemIcon><AssessmentIcon/></ListItemIcon>
              <ListItemText primary='All Systems' />
          </ListItem>
          <Link
          href="/activeIssues"
          passHref>
          <ListItem button>
              <ListItemIcon><ErrorIcon/></ListItemIcon>
              <ListItemText primary='Active Issues' />
          </ListItem>
          </Link>
          <Link
          href="/activeMaintenance"
          passHref>
          <ListItem button>
              <ListItemIcon><BuildIcon/></ListItemIcon>
              <ListItemText primary='Active Maintenance' />
          </ListItem>
          </Link>
          <Link
          href="/scheduledMaintenance"
          passHref>
          <ListItem button>
              <ListItemIcon><UpdateIcon/>
              </ListItemIcon>
              <ListItemText primary='Scheduled Maintenance' />
          </ListItem>
          </Link>
          
          
      </List>
      <Divider />
      <List>
      <Link
          href="/canada"
          passHref>
          <ListItem button>
              <ListItemIcon><PublicIcon/>
              </ListItemIcon>
              <ListItemText primary='Canada' />
          </ListItem>
          </Link>
          <Link
          href="/europe"
          passHref>
          <ListItem button>
              <ListItemIcon><PublicIcon/></ListItemIcon>
              <ListItemText primary='Europe' />
          </ListItem>
          </Link>
          <Link
          href="/mexico"
          passHref>
            <ListItem button>
              <ListItemIcon><PublicIcon/></ListItemIcon>
              <ListItemText primary='Mexico' />
          </ListItem>
          </Link>
          <Link
          href="/unitedStates"
          passHref>
            <ListItem button>
              <ListItemIcon><PublicIcon/>
              </ListItemIcon>
              <ListItemText primary='United States' />
          </ListItem>
          </Link>
          
      </List>
      <Divider />
      <List>
          <ListItem>
              <ListItemIcon>
              <FormControlLabel
              control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" />}
              />
              </ListItemIcon>
              <ListItemText>Dark Mode</ListItemText>
          </ListItem>
          <Link
          href="/barChart"
          passHref>
          <ListItem button>
            <ListItemIcon><BugReportIcon/></ListItemIcon><ListItemText primary='Chart Debugging'/>
          </ListItem>
          </Link>
      </List>
      </Router>
      </div>
  );

  {/*End of Top */}

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
    <CssBaseline></CssBaseline>
    
    
    <Layout home>
      <Head>
        <title>System status</title>
      </Head>

      <ThemeProvider theme={darkTheme}>
      <div className={classes4.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar disableGutters={true}>
                <React.Fragment>
                <IconButton
                    className={classes4.menuButton}
                    color="primary"
                    aria-label="open menu"
                    onClick={toggleDrawer('left', true)}
                    > 
                <MenuIcon />
            </IconButton>   
                <Drawer 
                    anchor={'left'} 
                    open={state['left']} 
                    onClose={toggleDrawer('left', false)}>{list('left')}
                </Drawer>
                </React.Fragment>
                
                  
                  <Link href='/'>
                  <a>
                    <Typography color="primary" className={classes4.title} variant="h6" >
                      Status
                    </Typography>
                  </a>
                  
                  </Link>
                    

                
                <div className={classes4.search}>
                  <div className={classes4.searchIcon}>
                    <SearchIcon color="primary"/>
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes4.inputRoot,
                      input: classes4.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes4.grow} />
                <div className={classes4.sectionDesktop}>
                  <IconButton aria-label="show 1 new notifications" color="primary">
                    <Badge badgeContent={1} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="primary"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes4.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="primary"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </div>
          </ThemeProvider>           


      <section>
        <br/>
        <ThemeProvider theme={darkTheme}>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Typography color="primary" className={classes2.link}>
              <HomeIcon className={classes2.icon} />
                Home
            </Typography>
          </Breadcrumbs>
          
        <br/>
          <Typography variant='h1' color='primary'>{loading ? <Skeleton /> : 'React Demo'}</Typography>
        <br/>
        <Typography color="primary" variant='body1' >
        {loading ? <Skeleton /> : 'Hi, I’m Bryce. I’m a software engineer and a user experience designer.'}
        </Typography>
        
        <br/>
        <Switch checked={darkState} onChange={handleThemeChange} name="darkSwitch" />
        <Typography variant='body1' color="primary">
        {loading ? <Skeleton /> : 'Dark mode test'}
        </Typography>
        <br/>
        <br/>
        
        <Typography color='primary' variant='body1'>Auth0 Testing</Typography>
        <br/>
        </ThemeProvider>
        <Link
            href="/api/login"
            passHref>
            <Button startIcon={<VpnKeyIcon />} variant='text' style={{borderColor: 'primary', color: "primary" }}>Login</Button>
        </Link>
        <br/>
        <Link
            href="/api/logout"
            passHref>
            <Button startIcon={<ExitToAppIcon />} variant='text' style={{borderColor: 'primary', color: "primary" }}>Logout</Button>
        </Link>
      <br/>
      <Link
            href="/api/me"
            passHref>
            <Button startIcon={<AccountCircle />} variant='text' style={{borderColor: 'primary', color: "primary" }}>Profile</Button>
        </Link>
      <br/>
      <br/>              
      <br/>  
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <Grid container spacing={1} direction='row' alignItems='center' >
        <Grid item>
        <ThemeProvider theme={darkTheme}>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Blog'}
          </Typography>
        </ThemeProvider>
        </Grid>
        <Grid item>
        <ThemeProvider theme={darkTheme}>
          <div className={classes3.root}>
          <Tooltip title="These blog posts come with the next.js tutorial">
          <IconButton aria-label="help" color='primary' onClick={handleClickSnack}>
            <HelpIcon />
          </IconButton>
          </Tooltip>
          <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              You sucessfully clicked a button, congrats!
            </Alert>
          </Snackbar>
          </div>
        </ThemeProvider >
        </Grid>
      </Grid>
      <br/>


          <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <ThemeProvider theme={darkTheme}>
              
              <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
                <a>
                  <Typography color='primary'>
                    {title}
                  </Typography>
                </a>
              </Link>
              
              <Typography color='secondary' variant='body2'>
                <Date dateString={date} />
              </Typography>
              </ThemeProvider>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <br/>
      <ThemeProvider theme={darkTheme}>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Summary'}
          </Typography>
        </ThemeProvider>
      <br/>
      <Grid container direction={'row'} spacing={2} justify='space-evenly' alignItems='center'>
      <Router>
	      <Grid item>
        {/* How to pass a dynamically generated link through a material ui button
        <Link
          href={'/static/[dynamic]'}
          as={'/static/' + someJsString}
          passHref>
          <Button
              component="a">
              // other component ...
          </Button>
        </Link>
        
        */}


        {loading ? (
        <Skeleton animation="wave" variant="rect" width={180} height={180} />
      ) : (
        <ThemeProvider theme={darkTheme}>
            <Link
            href="/activeIssues"
            passHref>
          <StyledButton>1</StyledButton>
          </Link>
        </ThemeProvider>
          
        
            
         )}
      <ThemeProvider theme={darkTheme}>
          <Typography variant="body2" align='center' color='primary'>
              {loading ? <Skeleton /> : 'Active Issues'}
          </Typography>
        </ThemeProvider>
        
      </Grid>
		  <Grid item>

      {loading ? (
        <Skeleton animation="wave" variant="rect" width={180} height={180} />
      ) : (
        <ThemeProvider theme={darkTheme}>
            <Link
            href="/activeIssues"
            passHref>
          <StyledButton>2</StyledButton>
          </Link>
        </ThemeProvider>
            
         )}
        <ThemeProvider theme={darkTheme}>
          <Typography variant="body2" align='center' color='primary'>
              {loading ? <Skeleton /> : 'Active Maintenance'}
          </Typography>
        </ThemeProvider>
      
          </Grid>
				  <Grid item>
          
          {loading ? (
        <Skeleton animation="wave" variant="rect" width={180} height={180} />
      ) : (
        <ThemeProvider theme={darkTheme}>
            <Link
            href="/activeIssues"
            passHref>
          <StyledButton>3</StyledButton>
          </Link>
        </ThemeProvider>
            
         )}
        <ThemeProvider theme={darkTheme}>
          <Typography variant="body2" align='center' color='primary'>
              {loading ? <Skeleton /> : 'Scheduled Maintenance'}
          </Typography>
        </ThemeProvider>

          </Grid>
      </Router>
    </Grid>
      <Grid container direction={'row'} spacing={2}>
        <Grid item xl={4} md={4} sm={5} xs={6}>
        </Grid>
      </Grid>
      </section>
      <br/>
      <br/>
      <ThemeProvider theme={darkTheme}>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Regions'}
          </Typography>
      <br/>
      <br/>
      <Typography variant="h3" color='primary'>
        {loading ? <Skeleton /> : 'System 1'}
      </Typography>
      </ThemeProvider>
      
      
      <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
        <Grid item>
        <ThemeProvider theme={darkTheme}>
          <Typography variant="body1" color='primary'>
            {loading ? <Skeleton /> : 'Experiencing a service disruption'}
          </Typography>
        </ThemeProvider>
      </Grid>
      </Grid>
      <br/>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color="primary" startIcon={<CheckCircle />}>
              {'United States'}
            </Button>
          </ThemeProvider>
      </Grid>
      <Grid item>
      <Link
            href="/mexico"
            passHref>
        <Button startIcon={<Warning/>} variant='outlined' style={{borderColor: '#FFA631', backgroundColor: '#FFA631', color: "#1A1B36" }}>Mexico</Button>
      </Link>
      </Grid>
      <Grid item>
      <Link
            href="/canada"
            passHref>
        <Button startIcon={<Error />} variant='outlined' style={{borderColor: '#FFA631', color: "#FFA631" }} component={RouterLink} to="/">Canada</Button>
      </Link>
      </Grid>
      <Grid item><Link
            href="/europe"
            passHref><Button startIcon={<BuildIcon />} variant='outlined' style={{borderColor: '#7E9EF5', backgroundColor: '#7E9EF5', color: "#1A1B36" }}>Europe</Button>
      </Link>
      </Grid>
		</Router>
	</Grid>
    <br/>
    <br/>
    <ThemeProvider theme={darkTheme}>
    <Typography variant="h3" color='primary'>
        {loading ? <Skeleton /> : 'System 2'}
      </Typography>
    </ThemeProvider>
    
      <Grid container direction={'column'} spacing={1} alignItems='baseline'>
        <Grid item>
        <ThemeProvider theme={darkTheme}>
          <Typography variant="body1" color='primary'>
            {loading ? <Skeleton /> : 'All systems nominal'}
          </Typography>
        </ThemeProvider>
      </Grid>
      </Grid>
      <br/>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        <Grid item>
        <ThemeProvider theme={theme}> 
        <Link
            href="/unitedStates"
            passHref>
            <Button variant="outlined" color="primary" startIcon={<CheckCircle />}>
              {'United States'}
              </Button>
            </Link>
          </ThemeProvider>          
 
        </Grid>
        <Grid item>
        <ThemeProvider theme={theme}>
        <Link
            href="/mexico"
            passHref>
           
            <Button variant="outlined" color="primary" startIcon={<CheckCircle />}>
              {'Mexico'}
            </Button>
          </Link>
          </ThemeProvider>    
        </Grid>
        <Grid item>
        <ThemeProvider theme={theme}>
 
        <Link
            href="/canada"
            passHref>
            <Button variant="outlined" color="primary" startIcon={<CheckCircle />}>
              {'Canada'}
            </Button>
        </Link>
        </ThemeProvider>

        </Grid>
        
        <Grid item>
          <ThemeProvider theme={theme}>
 
          <Link
              href="/europe"
              passHref>
              <Button variant="outlined" color="primary" startIcon={<CheckCircle />}>
                {'Europe'}
              </Button>
             </Link>
          </ThemeProvider>
        </Grid>
      </Router>
    </Grid>
    <br/>
    <br/>
	

    <ThemeProvider theme={darkTheme}>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Locations'}
          </Typography>
        </ThemeProvider>
    <br/>
    
    {/*Mapbox */}
    <DynamicComponentWithNoSSR />

    <br/>
    <br/>

    {/* Begin Countries List */}
    <ThemeProvider theme={darkTheme}>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Countries'}
          </Typography>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
      <List 
          component="nav" 
          aria-label="country list"
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <BuildIcon style={{ color: "#7E9EF5" }}/>
              </ListItemIcon>
              <ListItemText primary="Canada" primaryTypographyProps={{color:'primary'}} secondary="1 system undergoing maintenance" secondaryTypographyProps={{color:'secondary'}}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is undgergoing maintenance" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
              </ListItemIcon>
              <ListItemText primary="Mexico" primaryTypographyProps={{color:'primary'}} secondary="All systems nominal" secondaryTypographyProps={{color:'secondary'}}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
              </ListItemIcon>
              <ListItemText primary="Europe" secondary="All systems nominal" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
              </ListItemIcon>
              <ListItemText primary="United States" secondary="All systems nominal" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <ThemeProvider theme={theme}>
                    <CheckCircle color='primary'/>
                    </ThemeProvider>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
                </ListItem>
              </List>
            </Collapse>

        </List>
        </ThemeProvider>
        <br/>
        <br/>
        <br/>
        <br/>
          
    <Router>
          <Grid container spacing={1}  direction="column">
            <Grid item>
            
            <ThemeProvider theme={darkTheme}>
              <ThumbsUpDown color='primary'/>
              <Typography variant="body1" color='primary'>
                {loading ? <Skeleton /> : 'Was this page helpful?'}
              </Typography>
            </ThemeProvider>
            </Grid>
            <Grid item>
            <div className={classes1.root}>
            <StyledRating
              name="customized-hover-feedback"
              defaultValue={2}
              value={value}
              getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
                console.log('User rated this page ',newValue,' stars');
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
            
            </Grid>
          </Grid>
          <br/>
          <br/>
          </Router>
          <Divider/>
          <ThemeProvider theme={darkTheme}>
          <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader" color='primary'>
              Company
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Home" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="About us" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="News" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Careers" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Customer Center" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMicIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Contact Us" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider />

          <List 
          component="nav" 
          aria-label="customer service links"
          subheader={
            <ListSubheader component="div" id="customer-service-list-subheader" color='primary'>
              Customer Service
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-800-725-1243"  secondary="Always available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider />
          <List 
          component="nav" 
          aria-label="sales links"
          subheader={
            <ListSubheader component="div" id="sales-list-subheader" color='primary'>
              Sales
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-877-774-4090" secondary="Monday - Friday, 9AM - 7PM EST" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="social media links"
          subheader={
            <ListSubheader component="div" id="scocial-media-list-subheader" color='primary'>
              Social Media
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Twitter" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <YouTubeIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="YouTube" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="LinkedIn" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="legal links"
          subheader={
            <ListSubheader component="div" id="legal-list-subheader" color='primary'>
              Legal
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Privacy &amp; Cookie Policy" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          </ThemeProvider>
          <Divider />
          <br/>
          <br/>
          <Copyright />
  </Layout>
  </ThemeProvider>
  </React.Fragment>
  )
}



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}