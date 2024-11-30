import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { Grid2 as Grid, ThemeProvider } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { NavBreadcrumb } from '../../components/nav/breadcrumb';
import { theme } from '../../../App';


export const AppScreen = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid>
          <Sidebar />
        </Grid>
        <Grid component="main" size="grow" sx={{ padding: "1rem" }}>
          <Grid sx={{ height: "8vh" }}>
            <NavBreadcrumb />
          </Grid>
          <Grid sx={{ maxHeight: "87vh", overflowY: "scroll" }}>
            <ThemeProvider theme={theme}>

            <Outlet />
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
