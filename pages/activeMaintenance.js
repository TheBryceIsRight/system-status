import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';

function ActiveMaintenance(props) {
    const { loading = false } = props;

    return <Layout>
        <br/>
        <Typography variant="h4">
            {loading ? <Skeleton /> : 'Active Maintenance'}
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default ActiveMaintenance