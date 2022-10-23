import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

// component
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { DashboardLayout } from '../components/dashboard-layout';

// amplify
import { AmplifyProvider } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import awsconfig from "../aws-exports"
Amplify.configure(awsconfig)

const Page = () => (
  <AmplifyProvider>
    <Head>
      <title>
        Agrilay｜営農管理アプリ
      </title>
    </Head>
    <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </DashboardLayout>
  </AmplifyProvider>
);


export default Page;
