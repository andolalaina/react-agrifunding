import { Avatar, Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { navigations } from '../../../domain/const/navigations';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import "./sidebar.css"


export const MobileSidebar = () => {
  return (
    <Paper sx={{height: "100vh", padding: ".5rem .25rem", boxSizing: "border-box"}} >
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Box sx={{"display": "flex", "flexFlow": "column nowrap", "justifyContent": "space-around"}}>
          <Box sx={{"display": "flex", "flexFlow": "row nowrap", "justifyContent": "flex-start", "alignItems": "center", "marginBottom": "3rem"}}>
            <img src="/src/assets/logo.svg" style={{ width: "50px", height: "50px", backgroundColor: "#FFF", borderRadius: "50%" }}/>
            <Typography display={{"xs": "none", "sm": "block"}}>AgriFunding</Typography>
          </Box>
          <Box sx={{"display": "flex", "flexFlow": "column nowrap"}}>
            <Typography display={{"xs": "none", "sm": "block"}} variant="overline">Menu principal</Typography>
            <MenuList>
            {
              navigations.map((navigationItem) => (
                <Link key={navigationItem.id} to={navigationItem.url}>
                  <MenuItem>
                    <ListItemIcon>{navigationItem.icon()}</ListItemIcon>
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
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText className="sidebar-nav-text">Mon Profil</ListItemText>
            </MenuItem>
        </Link>
      </Box>
    </Paper>
  )
}