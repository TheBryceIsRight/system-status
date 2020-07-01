import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

import React from 'react'
import render from 'react-dom'
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
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
import { orange } from '../node_modules/@material-ui/core/colors'
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


let responsiveTheme = createMuiTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

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


const useStyles3 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

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

const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
  ssr: false
});


const LinkBehavior = React.forwardRef((props, ref) => (

  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));


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

function CustomCheckbox() {
  const classes = useStyles();


  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}


const theme = createMuiTheme({
  status: {
    danger: orange[500],
    success: green[500]
  },
  palette: {
    action: {
      disabledBackground: '#2F8A6F',
      disabled: 'white'
    }
  }

});



export default function Home({ allPostsData }, props) {
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

  return (
    <Layout home>
      <Head>
        <title>System status</title>
      </Head>
      <section>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Typography color="textPrimary" className={classes2.link}>
              <HomeIcon className={classes2.icon} />
                Home
            </Typography>
          </Breadcrumbs>
        <br/>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'React Demo'}</Typography>
        </ThemeProvider>
        <br/>
        <ThemeProvider theme={responsiveTheme}>
        <Typography variant='body1'>
        {loading ? <Skeleton /> : 'Hi, I’m Bryce. I’m a software engineer and a user experience designer.'}
        </Typography>
        </ThemeProvider>
        <br/>
        <br/>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <Grid container spacing={1} direction='row' alignItems='center' >
        <Grid item>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant="h2">
              {loading ? <Skeleton /> : 'Blog'}
          </Typography>
        </ThemeProvider>
        </Grid>
        <Grid item>
          <div className={classes3.root}>
          <Tooltip title="These blog posts come with the next.js tutorial">
          <IconButton aria-label="help" onClick={handleClickSnack}>
            <HelpIcon />
          </IconButton>
          </Tooltip>
          <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              You sucessfully clicked a button, congrats!
            </Alert>
          </Snackbar>
          </div>
        </Grid>
      </Grid>
      <br/>


          <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <br/>
      <ThemeProvider theme={responsiveTheme}>
          <Typography variant="h2">
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
        <Link
            href="/activeIssues"
            passHref>
          <Button variant="outlined"
          style = 
              {{ fontSize: '100px', 
                 maxWidth: '180px', 
                 maxHeight: '180px', 
                 minWidth: '180px', 
                 minHeight: '180px', 
                 borderColor: '#6669A8', 
                 color: "#FFA631" }}>1</Button>
                 </Link>
            
         )}
      <ThemeProvider theme={responsiveTheme}>
          <Typography variant="body2" align='center'>
              {loading ? <Skeleton /> : 'Active Issues'}
          </Typography>
        </ThemeProvider>
        
      </Grid>
		  <Grid item>

      {loading ? (
        <Skeleton animation="wave" variant="rect" width={180} height={180} />
      ) : (
        <Link
            href="/activeMaintenance"
            passHref>
          <Button variant="outlined"
          style = 
              {{ fontSize: '100px', 
                 maxWidth: '180px', 
                 maxHeight: '180px', 
                 minWidth: '180px', 
                 minHeight: '180px', 
                 borderColor: '#6669A8', 
                 color: "#7E9EF5" }}>2</Button>
                 </Link>
            
         )}
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant="body2" align='center'>
              {loading ? <Skeleton /> : 'Active Maintenance'}
          </Typography>
        </ThemeProvider>
      
          </Grid>
				  <Grid item>
          
          {loading ? (
        <Skeleton animation="wave" variant="rect" width={180} height={180} />
      ) : (
        <Link
            href="/scheduledMaintenance"
            passHref>
          <Button variant="outlined"
          style = 
              {{ fontSize: '100px', 
                 maxWidth: '180px', 
                 maxHeight: '180px', 
                 minWidth: '180px', 
                 minHeight: '180px', 
                 borderColor: '#6669A8', 
                 color: "#2ABD91" }}>3</Button>
                 </Link>
            
         )}
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant="body2" align='center'>
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
      <ThemeProvider theme={responsiveTheme}>
          <Typography variant="h2">
              {loading ? <Skeleton /> : 'Regions'}
          </Typography>
      <br/>
      <br/>
      <Typography variant="h3">
        {loading ? <Skeleton /> : 'System 1'}
      </Typography>
      </ThemeProvider>

      <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
        <Grid item>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant="body1">
            {loading ? <Skeleton /> : 'Experiencing a service disruption'}
          </Typography>
        </ThemeProvider>
      </Grid>
      </Grid>
      <br/>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        
        <Grid item>
          <Link
            href="/unitedStates"
            passHref>
          <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>United States</Button>
          </Link>
      </Grid>
      <Grid item>
      <Link
            href="/mexico"
            passHref>
        <Button startIcon={<Warning />} variant='outlined' style={{borderColor: '#FFA631', backgroundColor: '#FFA631', color: "#1A1B36" }}>Mexico</Button>
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
    <ThemeProvider theme={responsiveTheme}>
    <Typography variant="h3">
        {loading ? <Skeleton /> : 'System 2'}
      </Typography>
    </ThemeProvider>
    
      <Grid container direction={'column'} spacing={1} alignItems='baseline'>
        <Grid item>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant="body1">
            {loading ? <Skeleton /> : 'All systems nominal'}
          </Typography>
        </ThemeProvider>
      </Grid>
      </Grid>
      <br/>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        <Grid item>
        <Link
            href="/unitedStates"
            passHref>
          <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>United States</Button>
          </Link>
        </Grid>
        <Grid item>
        <Link
            href="/mexico"
            passHref>
          <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>Mexico</Button>
          </Link>
        </Grid>
        <Grid item>
        <Link
            href="/canada"
            passHref>
          <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>Canada</Button>
        </Link>
        </Grid>
        
        <Grid item><Link
            href="/europe"
            passHref>
            <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }}>Europe</Button>
            </Link>
        </Grid>
      </Router>
    </Grid>
    <br/>
    <br/>
	

    <ThemeProvider theme={responsiveTheme}>
          <Typography variant="h2">
              {loading ? <Skeleton /> : 'Locations'}
          </Typography>
        </ThemeProvider>
    <br/>
    
    
    <DynamicComponentWithNoSSR />

    <br/>
    <br/>

    {/* Begin Countries List
    */}
    <ThemeProvider theme={responsiveTheme}>
          <Typography variant="h2">
              {loading ? <Skeleton /> : 'Countries'}
          </Typography>
        </ThemeProvider>
      <List 
          component="nav" 
          aria-label="country list"
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <BuildIcon style={{ color: "#7E9EF5" }}/>
              </ListItemIcon>
              <ListItemText primary="Canada" secondary="1 system undergoing maintenance" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <BuildIcon style={{ color: "#7E9EF5" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is undgergoing maintenance" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <CheckCircle style={{color: "#B1ECE2" }}/>
              </ListItemIcon>
              <ListItemText primary="Mexico" secondary="All systems nominal" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <CheckCircle style={{color: "#B1ECE2" }}/>
              </ListItemIcon>
              <ListItemText primary="Europe" secondary="All systems nominal" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <CheckCircle style={{color: "#B1ECE2" }}/>
              </ListItemIcon>
              <ListItemText primary="United States" secondary="All systems nominal" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 1 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CheckCircle style={{color: "#B1ECE2" }}/>
                  </ListItemIcon>
                  <ListItemText primary="System 3 is available" />
                </ListItem>
              </List>
            </Collapse>

        </List>
        <br/>
        <br/>
        <br/>
        <br/>
          
    <Router>
          <Grid container spacing={1}  direction="column">
            <Grid item>
            <ThumbsUpDown/>
            <Typography variant="body1">
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
          <br/>
          </Router>
          <Divider/>
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
            <ListSubheader component="div" id="scocial-media-list-subheader">
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
            <ListSubheader component="div" id="legal-list-subheader">
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
</Layout>
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