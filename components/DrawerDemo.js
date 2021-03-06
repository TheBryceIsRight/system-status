import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import Drawer from '@material-ui/core/Drawer';  
import Button from '@material-ui/core/Button';  
import List from '@material-ui/core/List';  
import Divider from '@material-ui/core/Divider';  
import ListItem from '@material-ui/core/ListItem';  
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { MemoryRouter as Router } from 'react-router'
import Link from 'next/link';

import clsx from 'clsx';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import ErrorIcon from '@material-ui/icons/Error';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import UpdateIcon from '@material-ui/icons/Update';
import PublicIcon from '@material-ui/icons/Public';
import Flag from 'react-world-flags'
import BugReportIcon from '@material-ui/icons/BugReport';  
  

const useStyles = makeStyles((theme) => ({
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
      marginLeft: 0,
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
      color: 'inherit',
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

export default function DrawerDemo() {  
    const classes = useStyles();
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
            <IconButton aria-label="show 1 new notifications" color="inherit">
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
            color="inherit"
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
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
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
                <ListItemIcon><FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                /></ListItemIcon>
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
            <div className={classes.grow}>
            <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar disableGutters={true}>
                <React.Fragment>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
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
                    <Typography className={classes.title} variant="h6">
                      Status
                    </Typography>
                  </a>
                  
                  </Link>
                    

                
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton aria-label="show 1 new notifications" color="inherit">
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
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </div>
        );  
}  