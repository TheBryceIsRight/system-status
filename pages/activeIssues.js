import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function ActiveIssues(props) {
    const { loading = false } = props;

    return <Layout>
        <br/>
        <Typography variant="h4">
            {loading ? <Skeleton /> : 'Active Issues'}
        </Typography>
        <br/>
        <CustomTable/>
    </Layout>
}

export default ActiveIssues