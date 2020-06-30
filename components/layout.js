import Head from 'next/head';
import styles from './layout.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
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




const name = 'System Status';
export const siteTitle = 'Next.js Demo';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Layout({ children, home }, props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const classes1 = useStyle1();

  const { loading = false } = props;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

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
      <header>
        {home ? (
          <>
            <div className="App">
            <DrawerDemo/>
            </div>
          </>
        ) : (
          <>
            <div className="App">
            <DrawerDemo/>  
            </div>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Router>
          <Link
            href="/"
            passHref>
            <Button startIcon={<ArrowBackIcon />} variant='text' style={{borderColor: '#7E9EF5', color: "#FFFFFF" }} component={RouterLink} to="/">Back to Home</Button>
            </Link>
          <br/>
          <br/>
          
          <Grid container spacing={1}  direction="column">
            <Grid item>
            <ThumbsUpDown/>
            <Typography variant="h6">
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
          <Router>
          <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader">
              Company
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About us" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Careers" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Customer Center" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMicIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>

          </Router>
          
          <Divider />

          <List 
          component="nav" 
          aria-label="customer service links"
          subheader={
            <ListSubheader component="div" id="customer-service-list-subheader">
              Customer Service
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+1-800-725-1243"  secondary="Always available" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" />
            </ListItem>
          </List>
          <Divider />
          <List 
          component="nav" 
          aria-label="sales links"
          subheader={
            <ListSubheader component="div" id="sales-list-subheader">
              Sales
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+1-877-774-4090" secondary="Monday - Friday, 9AM - 7PM EST"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" />
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="social media links"
          subheader={
            <ListSubheader component="div" id="sales-list-subheader">
              Social Media
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="YouTube" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="legal links"
          subheader={
            <ListSubheader component="div" id="sales-list-subheader">
              Legal
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary="Privacy &amp; Cookie Policy" />
            </ListItem>
            
          </List>
          <Divider />
          <br/>
          <br/>
          <Copyright />
        </div>
        
      )}
    </div>    
  )
}
