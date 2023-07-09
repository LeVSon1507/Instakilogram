import { Avatar, Grid, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


export const Work = () => {
  return (
    <Grid container>
      <Grid sx={{
        width: "100%",
        fontSize: 28,
        fontWeight: "500",
      }}>
        Works
      </Grid>
      <Grid container alignItems="center">
        <IconButton aria-label="adding" sx={{
          fontSize: 40,
          marginTop: 2
        }}>
          <AddIcon fontSize="inherit" />
        </IconButton>
        <p>Add Work Places</p>
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
            Themeforest
          </h3>
          <p>
            Web Designer
          </p>
        </Grid>
        <Grid justifyContent="end">
          <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        </Grid>
      </Grid>
      {/* <Grid sx={{
        width: "100%",
        fontSize: 28,
        fontWeight: "500",
        marginTop: 2
      }}>
        Family Members
      </Grid>
      <Grid container alignItems="center">
        <IconButton aria-label="adding" sx={{
          fontSize: 40,
          marginTop: 2
        }}>
          <AddIcon fontSize="inherit" />
        </IconButton>
        <p>Add Family Members</p>
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
            Nguyễn Văn C
          </h3>
          <p>
            Brother
          </p>
        </Grid>
        <Grid justifyContent="end">
          <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        </Grid>
      </Grid> */}
    </Grid>
  )
}
