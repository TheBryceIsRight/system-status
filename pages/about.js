import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';

function About() {
    return <Layout>
        <br/>
        <Typography variant='h4'>
            Table Demo
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default About