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
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown'
import Warning from '@material-ui/icons/Warning'
import Error from '@material-ui/icons/Error'
import Build from '@material-ui/icons/Build';
import dynamic from 'next/dynamic';
import Copyright from '../components/copyright';


const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
  ssr: false
});


const LinkBehavior = React.forwardRef((props, ref) => (

  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));


const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.success,
    '&$checked': {
      color: theme.status.success,
    },
  },
  checked: {},
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
  return (
    <Layout home>
      <Head>
        <title>Bryce's Next.js Project</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
        <br/>
        <Typography variant='body1'>
          Hi, I’m <strong>Bryce</strong>. I’m a software engineer and an UX Designer.
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
		      <Button variant="outlined" style={{ fontSize: '100px', maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px', borderColor: '#6669A8', color: "#FFA631" }} component={RouterLink} to="/">1</Button>
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
      <Grid item>
        <Button startIcon={<CheckCircle />} variant='outlined' style={{borderColor: '#2F8A6F', color: "#B1ECE2" }} component={RouterLink} to="/">United States</Button>
      </Grid>
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