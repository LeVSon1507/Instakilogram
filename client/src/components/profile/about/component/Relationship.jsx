import React, { useState } from 'react';
import { Avatar, Grid, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Relationship = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newRelationship, setNewRelationship] = useState({
    src: '',
    name: '',
    relationshipType: '',
  });
  const [relationships, setRelationships] = useState([
    {
      src: '/static/images/avatar/1.jpg',
      name: 'Nguyễn Văn A',
      relationshipType: 'Brother',
    },
  ]);

  const handleAddClick = () => {
    setIsAdding(true);
    setNewRelationship({
      src: '',
      name: '',
      relationshipType: '',
    });
  };

  const handleInputChange = (field, value) => {
    setNewRelationship((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsAdding(false);
    setRelationships((prev) => [...prev, newRelationship]);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
  };

  const handleDeleteClick = (index) => {
    setRelationships((prev) => prev.filter((_, i) => i !== index));
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
        Relationships
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
              label="Name"
              value={newRelationship.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              fullWidth
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Relationship Type"
              value={newRelationship.relationshipType}
              onChange={(e) => handleInputChange('relationshipType', e.target.value)}
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
          <p>Add Relationship Status</p>
        </Grid>
      )}
      {relationships.map((relationship, index) => (
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
            src={relationship.src}
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Grid sx={{ flex: 1 }}>
            <h3>{relationship.name}</h3>
            <p>{relationship.relationshipType}</p>
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
