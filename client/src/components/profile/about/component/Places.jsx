import { Avatar, Grid, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const Places = () => {
  return (
    <Grid container>
      <Grid sx={{
        width: "100%",
        fontSize: 28,
        fontWeight: "500",
      }}>
        Current City and Hometown
      </Grid>
      <Grid container alignItems="center">
        <IconButton aria-label="adding" sx={{
          fontSize: 40,
          marginTop: 2
        }}>
          <AddIcon fontSize="inherit" />
        </IconButton>
        <p>Add Your Relationship Status</p>
      </Grid>
      <Grid container alignItems="center" sx={{
        gap: 3
      }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: 50, height: 50,
          }}
        />
        <Grid sx={{ flex: 1 }}>
          <h3>
            USA
          </h3>
          <p>
            American
          </p>
        </Grid>
        <Grid justifyContent="end">
          <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
