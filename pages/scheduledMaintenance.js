import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';

function ScheduledMaintenance() {
    return <Layout>
        <br/>
        <Typography variant='h4'>
            Scheduled Maintenance
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default ScheduledMaintenance