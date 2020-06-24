import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';

function ActiveIssues() {
    return <Layout>
        <br/>
        <Typography variant='h4'>
            Active Issues
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default ActiveIssues