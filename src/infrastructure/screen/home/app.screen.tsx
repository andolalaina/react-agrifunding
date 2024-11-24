import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { Grid2 as Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';


export const AppScreen = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid>
          <Sidebar />
        </Grid>
        <Grid component="main" size="grow" sx={{ padding: "1rem" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
