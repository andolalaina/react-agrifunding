import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { navigations } from '../../../domain/const/navigations';

export const Sidebar = () => {
  return (
    <Paper sx={{height: "100vh", padding: ".5rem 1rem", boxSizing: "border-box"}} >
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Box sx={{"display": "flex", "flexFlow": "column nowrap", "justifyContent": "space-around"}}>
          <Box sx={{"display": "flex", "flexFlow": "row nowrap", "justifyContent": "flex-start", "alignItems": "center", "marginBottom": "3rem"}}>
            <img src="/src/assets/logo.svg" style={{ width: "50px", height: "50px", backgroundColor: "#F0F0F0", borderRadius: "50%" }}/>
            <Typography>AgriFunding</Typography>
          </Box>
          <Box sx={{"display": "flex", "flexFlow": "column nowrap"}}>
            <Typography variant="overline">Menu principal</Typography>
            <MenuList>
            {
              navigations.map((navigationItem) => (
                <Link key={navigationItem.id} to={navigationItem.url}>
                  <MenuItem>
                    <ListItemIcon>{navigationItem.icon()}</ListItemIcon>
                    <ListItemText>{navigationItem.title}</ListItemText>
                  </MenuItem>
                </Link>
              ))
            }
            </MenuList>
          </Box>
        </Box>
        <Box sx={{"display": "flex", "flexFlow": "row nowrap", "justifyContent": "space-between"}}>
          <p>logo</p>
          <p>username</p>
          <p>actions</p>
        </Box>
      </Box>
    </Paper>
  )
}