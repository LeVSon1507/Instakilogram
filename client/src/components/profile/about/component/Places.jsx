import React, { useState } from 'react';
import { Avatar, Grid, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Places = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newPlace, setNewPlace] = useState({
    location: '',
    hometown: '',
  });
  const [places, setPlaces] = useState([
    {
      location: 'USA',
      hometown: 'American',
    },
  ]);

  const handleAddClick = () => {
    setIsAdding(true);
    setNewPlace({
      location: '',
      hometown: '',
    });
  };

  const handleInputChange = (field, value) => {
    setNewPlace((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsAdding(false);
    setPlaces((prev) => [...prev, newPlace]);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
  };

  const handleDeleteClick = (index) => {
    setPlaces((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Grid container>
      <Grid
        sx={{
          width: '100%',
          fontSize: 28,
          fontWeight: '500',
        }}
      >
        Current City and Hometown
      </Grid>
      {isAdding ? (
        <Grid container alignItems="center">
          <Grid item>
            <IconButton
              aria-label="save"
              onClick={handleSaveClick}
              sx={{
                fontSize: 40,
              }}
            >
              <CheckIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="cancel"
              onClick={handleCancelClick}
              sx={{
                fontSize: 40,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs>
            <TextField
              label="Location"
              value={newPlace.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              fullWidth
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Hometown"
              value={newPlace.hometown}
              onChange={(e) => handleInputChange('hometown', e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center">
          <IconButton
            aria-label="adding"
            onClick={handleAddClick}
            sx={{
              fontSize: 40,
            }}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
          <p>Add Current City and Hometown</p>
        </Grid>
      )}
      {places.map((place, index) => (
        <Grid
          key={index}
          container
          alignItems="center"
          sx={{
            gap: 3,
          }}
        >
          <Avatar
            alt="Avatar"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Grid sx={{ flex: 1 }}>
            <h3>{place.location}</h3>
            <p>{place.hometown}</p>
          </Grid>
          <Grid justifyContent="end">
            <IconButton aria-label="delete" size="large" onClick={() => handleDeleteClick(index)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
