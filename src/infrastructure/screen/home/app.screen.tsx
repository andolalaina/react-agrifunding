import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { Grid2 as Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { NavBreadcrumb } from '../../components/nav/breadcrumb';


export const AppScreen = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid>
          <Sidebar />
        </Grid>
        <Grid component="main" size="grow" sx={{ padding: "1rem" }}>
          <NavBreadcrumb />
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
