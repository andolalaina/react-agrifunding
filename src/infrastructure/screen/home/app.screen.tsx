import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Grid2 as Grid } from '@mui/material';
import { MobileSidebar } from '../../components/sidebar/mobileSidebar';





export const AppScreen = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{"xs": 2, "sm": 3}}>
          <MobileSidebar />
        </Grid>
        <Grid component="main" size={{ xs: 10, sm: 9 }} sx={{ padding: "1rem" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
