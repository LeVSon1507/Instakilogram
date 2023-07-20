import React, { useState } from 'react';
import { Avatar, Grid, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Work = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newWork, setNewWork] = useState({
    src: '',
    companyName: '',
    jobTitle: '',
  });
  const [works, setWorks] = useState([
    // Các mục trong danh sách dữ liệu ban đầu (chú ý rằng đây chỉ là một ví dụ)
    {
      src: '/static/images/avatar/1.jpg',
      companyName: 'Themeforest',
      jobTitle: 'Web Designer',
    },
  ]);

  const handleAddClick = () => {
    setIsAdding(true);
    setNewWork({
      src: '',
      companyName: '',
      jobTitle: '',
    });
  };

  const handleInputChange = (field, value) => {
    setNewWork((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsAdding(false);
    setWorks((prev) => [...prev, newWork]);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
  };

  const handleDeleteClick = (index) => {
    setWorks((prev) => prev.filter((_, i) => i !== index));
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
        Works
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
              label="Company Name"
              value={newWork.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              fullWidth
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Job Title"
              value={newWork.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
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
          <p>Add Work Places</p>
        </Grid>
      )}
      {works.map((work, index) => (
        <Grid
          key={index}
          container
          alignItems="center"
          sx={{
            gap: 3,
          }}
        >
          <Avatar
            alt="Company Logo"
            src={work.src}
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Grid sx={{ flex: 1 }}>
            <h3>{work.companyName}</h3>
            <p>{work.jobTitle}</p>
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
