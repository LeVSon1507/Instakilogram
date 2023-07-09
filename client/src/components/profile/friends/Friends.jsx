import { Autocomplete, Avatar, Box, Button, Card, CardContent, CardMedia, Grid, IconButton, ImageListItem, ImageListItemBar, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
export const Friends = () => {
  return (
    <Grid>
      <Typography variant="h3" sx={{
        fontWeight: 600,
        marginTop: 3
      }}>
        Friends
      </Typography>
      <TextField
        label="Please enter the friends'name"
        InputProps={{
          type: 'search',
        }}
        sx={{
          marginY: 4,
          width: 300
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        <ImageListItem sx={{ width: 300 }}>
          <Avatar
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340767734_531530315814851_7073978951600084146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d9JUPmivsWAAX8uQpLp&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBF_DP1GknWE8BkYh9sAZorIuKmDfn4Is8FJ3gfof9j_w&oe=64AFCF54"
            alt="friends"
            sx={{ width: '100%', height: '100%', borderRadius: 0 }}
          />
          <ImageListItemBar
            sx={{ textAlign: 'center' }} // Căn giữa nội dung
            title="Nguyễn Đức Nghĩa"
            subtitle="5 bạn bè chung"
            actionIcon={
              <Tooltip title="Friends">
                <IconButton disableTouchRipple sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                  <PeopleIcon />
                </IconButton>
              </Tooltip>
            }
          />
        </ImageListItem>
      </Box>
    </Grid>
  );
};

