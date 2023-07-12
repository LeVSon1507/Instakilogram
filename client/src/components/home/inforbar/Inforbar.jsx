import React from 'react'
import './Inforbar.scss'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'

const Inforbar = ({mode,setMode}) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}
      >
      <List>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton component='a' href='#homes'>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  )
}

export default Inforbar