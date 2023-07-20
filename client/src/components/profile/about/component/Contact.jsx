import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const Contact = () => {
  const data = [
    { label: 'Email:', value: 'bnijohn@gmail.com' },
    { label: 'Mobile:', value: '(001) 4544 565 456' },
    { label: 'Address:', value: 'United States of America' },
    { label: 'Social Link:', value: 'www.bootstrap.com' },
    { label: 'Birth Date:', value: '24 January' },
    { label: 'Birth Year:', value: '1994' },
    { label: 'Birthplace:', value: 'Austin, Texas, USA' },
    { label: 'Lives in:', value: 'San Francisco, California, USA' },
    { label: 'Gender:', value: 'Female' },
    { label: 'Interested in:', value: 'Designing' },
    { label: 'Language:', value: 'English, French' },
    { label: 'Joined:', value: 'April 31st, 2014' },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditedValue(data[index].value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <Grid container>
      <Grid
        sx={{
          width: '100%',
          fontSize: 28,
          fontWeight: '500',
          borderBottom: '1px solid black',
        }}
      >
        Personal Info
      </Grid>
      {data.map((item, index) => (
        <Grid container gap={20} sx={{ fontSize: 20, marginTop: 3, position: 'relative' }}>
          {isEditing && index === editIndex ? (
            <React.Fragment key={index}>
              <Grid md={2}>{item.label}</Grid>
              <Grid md={5}>
                <TextField value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
              </Grid>
              <Button variant="text" onClick={handleSaveClick} sx={{ position: 'absolute', right: 0, top: 0 }}>
                Save
              </Button>
              <Button variant="text" onClick={handleCancelClick} sx={{ position: 'absolute', right: 50, top: 0 }}>
                Cancel
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <Grid md={2}>{item.label}</Grid>
              <Grid md={5}>{item.value}</Grid>
              <Button
                variant="text"
                onClick={() => handleEditClick(index)}
                sx={{ position: 'absolute', right: 0, top: -6 }}
              >
                <EditIcon />
              </Button>
            </React.Fragment>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
