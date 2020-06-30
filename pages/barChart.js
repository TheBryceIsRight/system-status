import data from '../components/data';
import BugReportIcon from '@material-ui/icons/BugReport';  

import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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
import WorkLifeBalance from "../components/WorkLifeBalance";



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
    const { loading = false } = props;
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/map' ), {
        ssr: false
      });
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };


    return <Layout>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <BugReportIcon className={classes.icon} />
              Bar Chart Debugging
            </Typography>
          </Breadcrumbs>
          <br/>  
        <Typography variant="h4">
            {loading ? <Skeleton /> : 'Bar Chart'}
        </Typography>
        <br/>
        <div className="App">
            <div className="Chart">
                <WorkLifeBalance/>
            </div>
        </div>      
        
          
    </Layout>

}

export default LineChart

