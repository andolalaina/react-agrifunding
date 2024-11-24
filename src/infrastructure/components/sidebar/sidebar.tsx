import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { navigations } from '../../../domain/const/navigations';
import "./sidebar.css"

export const Sidebar = () => {
  return (
    <Paper sx={{height: "100vh", padding: ".5rem .25rem", boxSizing: "border-box"}} >
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Box sx={{"display": "flex", "flexFlow": "column nowrap", "justifyContent": "space-around"}}>
          <Box sx={{"display": "flex", "flexFlow": "row nowrap", "justifyContent": "flex-start", "alignItems": "center", "marginBottom": "3rem"}}>
            <img src="/src/assets/logo.svg" style={{ width: "50px", height: "50px", backgroundColor: "#FFF", borderRadius: "50%" }}/>
            <Typography className="sidebar-nav-section" variant="h6">AgriFunding</Typography>
          </Box>
          <Box sx={{"display": "flex", "flexFlow": "column nowrap"}}>
            <Typography className="sidebar-nav-section" variant="overline">Menu principal</Typography>
            <MenuList>
            {
              navigations.map((navigationItem) => (
                <Link key={navigationItem.id} to={navigationItem.url}>
                  <MenuItem className="sidebar-nav-item">
                    <ListItemIcon className="sidebar-nav-icon">{navigationItem.icon()}</ListItemIcon>
                    <ListItemText className="sidebar-nav-text">{navigationItem.title}</ListItemText>
                  </MenuItem>
                </Link>
              ))
            }
            </MenuList>
          </Box>
        </Box>
        <Link to="my-profile">
            <MenuItem>
            <ListItemIcon className="sidebar-nav-icon"><AccountCircleIcon /></ListItemIcon>
            <ListItemText className="sidebar-nav-text">Mon Profil</ListItemText>
            </MenuItem>
        </Link>
      </Box>
    </Paper>
  )
}