import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { DrawerHeader, Sidebar } from '../../components/sidebar/sidebar';





export const AppScreen = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
