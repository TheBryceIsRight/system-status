import Head from 'next/head';
import styles from './layout.module.css';
import { createMuiTheme, fade, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import React, { useState }  from 'react'

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import ErrorIcon from '@material-ui/icons/Error';
import Grid from '@material-ui/core/Grid'
import DrawerDemo from './DrawerDemo';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown'
import { MemoryRouter as Router } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import Copyright from '../components/copyright';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import StarIcon from '@material-ui/icons/Star';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
  grey
} from "@material-ui/core/colors";

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import UpdateIcon from '@material-ui/icons/Update';
import BugReportIcon from '@material-ui/icons/BugReport';  
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';  
import clsx from 'clsx';
import PublicIcon from '@material-ui/icons/Public';


const name = 'System Status';
export const siteTitle = 'Next.js Demo';

const StyledRating = withStyles({
  iconFilled: {
    color: '#40BBEF'
  },
  iconHover: {
    color: '#73D6F9',
  },
  value: {
    color: 'primary'
  }
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

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


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

export default function Layout({ children, home }, props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  const { loading = false } = props;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#FFF': '#1A1B36';
  const mainSecondaryColor = darkState ? '#FFF' : '#1A1B36';
  const mainTertiaryColor = darkState ? lightBlue[500] : grey[500];
  const mainLinkColor = darkState ? '#7E9EF5' : '#1A1B36';
  const mainButtonColor = darkState ? deepOrange[900] : '#7E9EF5';
  const mainBackgroundColor = darkState ? '#1A1B36' : '#FFF';

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
      MuiListItemText: {
        primary: {
          color: mainPrimaryColor
        }
      }
    }
  });

  darkTheme = responsiveFontSizes(darkTheme);

  const classes = useStyles();
  const classes1 = useStyle1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [open, setOpen] = React.useState(true);
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  {/*Top App Bar stuff */}
  const classes4 = useStyles4();
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

      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
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
      setState({ ...state, [event.target.name]: event.target.checked });
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

  return (

      <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryce's project in Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!home && (
          <React.Fragment>
          <ThemeProvider theme={darkTheme}>
          <CssBaseline></CssBaseline>
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
              
                <ThemeProvider theme={darkTheme}>
                <Link href='/'>
                <a>
                  <Typography color="primary" className={classes4.title} variant="h6" >
                    Status
                  </Typography>
                </a>
                
                </Link>
                </ThemeProvider> 
  
                <ThemeProvider theme={darkTheme}>
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
              </ThemeProvider> 

            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </div>
        </ThemeProvider>
      </React.Fragment>         

      )}

      
      
      


      <main>{children}</main>
      {!home && (
        
        <ThemeProvider theme={darkTheme}>
        <div className={styles.backToHome} role='contentinfo'>
          <Router>
          <Link
            href="/"
            passHref>
            <Button startIcon={<ArrowBackIcon />} variant='text' style={{borderColor: '#7E9EF5', color: "primary" }}>Back to Home</Button>
            </Link>
          <br/>
          <br/>
          
          <Grid container spacing={1}  direction="column">
            <Grid item>
            <ThumbsUpDown/>
              <Typography variant="body1" color='primary'>
                {loading ? <Skeleton /> : 'Was this page helpful?'}
              </Typography>
            
            
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
          
          </Router>
          
          <br/>
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
          <div>
              <Copyright />
          </div>
        </div>
        </ThemeProvider>
      )}
      
    </div>    
  )
}
