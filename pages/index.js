import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

import React from 'react'
import render from 'react-dom'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
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
import Build from '@material-ui/icons/Build';
import dynamic from 'next/dynamic';
import Copyright from '../components/copyright';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import { LocalizeProvider } from "react-localize-redux";

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



export default function Home({ allPostsData }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <Layout home>
      <Head>
        <title>Bryce's Next.js Project</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
        <br/>
        <Typography variant='h3'> 
          React Demo
        </Typography>
        <br/>
        <Typography variant='body1'>
          Hi, I’m <strong>Bryce</strong>. I’m a software engineer and a user experience designer.
        </Typography>
        <br/>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
      <br></br>
      <h2>Summary</h2>
      <Grid container direction={'row'} spacing={2} justify='space-evenly' alignItems='center'>
      <Router>
	      <Grid item>
		      <Button variant="outlined" style={{ fontSize: '100px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px', borderColor: '#6669A8', color: "#FFA631" }} component={RouterLink} to="/about">1</Button>
          <Typography variant='body2' align='center' >
              Active Issues
            </Typography>
      </Grid>
		  <Grid item>
		      <Button variant="outlined" style={{ fontSize: '100px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px', borderColor: '#6669A8', color: "#7E9EF5" }} component={RouterLink} to="/">2</Button>
          <Typography variant='body2' align='center' >
              Active Maintenance
            </Typography>
          </Grid>
				  <Grid item>
		      <Button variant="outlined" style={{ fontSize: '100px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px', borderColor: '#6669A8', color: "#2ABD91" }} component={RouterLink} to="/">3</Button>
				  <Typography variant='body2' align='center' >
              Scheduled Maintenance
            </Typography>
          </Grid>
      </Router>
    </Grid>
      <Grid container direction={'row'} spacing={2}>
        <Grid item xl={4} md={4} sm={5} xs={6}>
        </Grid>
      </Grid>
      </section>
      <br></br>
      <h2>Regions</h2>
      <h3>System 1</h3>
      <p>Experiencing a service disruption</p>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        <Grid item><Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">United States</Button>
      </Grid>
      <Grid item><Button startIcon={<Warning />} variant='outlined' style={{borderColor: '#FFA631', backgroundColor: '#FFA631', color: "#1A1B36" }} component={RouterLink} to="/">Mexico</Button>
      </Grid>
      <Grid item>
        <Button startIcon={<Error />} variant='outlined' style={{borderColor: '#FFA631', color: "#FFA631" }} component={RouterLink} to="/">Canada</Button>
      </Grid>
      <Grid item><Button startIcon={<Build />} variant='outlined' style={{borderColor: '#7E9EF5', backgroundColor: '#7E9EF5', color: "#1A1B36" }} component={RouterLink} to="/">Europe</Button>
      </Grid> 
		</Router>
	</Grid>	
    <br/>
      <h3>System 2</h3>
      <p>All systems nominal</p>
      <Grid container direction={'row'} spacing={1}>
      <Router>
        <Grid item><Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">United States</Button>
        </Grid>
        <Grid item><Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">Mexico</Button>
        </Grid>
        <Grid item><Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">Canada</Button>
        </Grid>
        <Grid item><Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">Europe</Button>
        </Grid>
      </Router>
    </Grid>	

    <br/>
    <br/>
    <h2>Locations</h2>
    
    <DynamicComponentWithNoSSR />

    <br/>
    <br/>

    {/* Begin Countries List
    */}
    <h2>Countries</h2>
      <List 
          component="nav" 
          aria-label="country list"
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <Build style={{ color: "#7E9EF5" }}/>
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
                    <Build style={{ color: "#7E9EF5" }}/>
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
          <Grid container spacing={1}  direction="row" alignItems="center">
            <Grid item>
              <ThumbsUpDown/>
            </Grid>
            <Grid item>
              <h3>Was this page helpful?</h3>
            </Grid>
          </Grid>
          <Grid container spacing={4} direction="row" alignItems="center">
            <Grid item>
              <Button startIcon={<ThumbUp />} variant='text' style={{borderColor: '#7E9EF5', color: "#FFFFFF" }} component={RouterLink} to="/">Yes</Button>
              </Grid>
            <Grid item>
              <Button startIcon={<ThumbDown />} variant='text' style={{borderColor: '#FFE4BD', color: "#FFFFFF" }} component={RouterLink} to="/">No</Button>
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