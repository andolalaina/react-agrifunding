import { ThemeProvider } from '@emotion/react';
import './App.css'
import { MainRoutes } from './infrastructure/routes'
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({

});

function App() {


  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  )
}

export default App
