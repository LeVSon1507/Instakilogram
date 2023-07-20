import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const Hobbies = () => {
  const data = [
    {
      title: 'Hobbies:',
      value:
        'Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign. I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.',
    },
    {
      title: 'Favourite TV Shows:',
      value: 'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
    },
    {
      title: 'Favourite Movies:',
      value: 'Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad, Ferrum Man.',
    },
    {
      title: 'Favourite Games:',
      value: 'The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.',
    },
    {
      title: 'Favourite Music Bands / Artists:',
      value: 'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.',
    },
    {
      title: 'Favourite Books:',
      value:
        'The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.',
    },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState(data.map((item) => item.value));
  const [editIndex, setEditIndex] = useState(null);

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    const newEditedValues = [...editedValues];
    newEditedValues[index] = data[index].value;
    setEditedValues(newEditedValues);
  };

  const handleInputChange = (e, index) => {
    const newEditedValues = [...editedValues];
    newEditedValues[index] = e.target.value;
    setEditedValues(newEditedValues);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const updatedData = [...data];
    updatedData[editIndex].value = editedValues[editIndex];
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
        Hobbies and Interests
      </Grid>
      {data.map((item, index) => (
        <Grid container gap={1} sx={{ fontSize: 20, marginTop: 3, position: 'relative' }}>
          {isEditing && index === editIndex ? (
            <React.Fragment key={index}>
              <Grid>{item.title}</Grid>
              <Grid md={12}>
                <TextField
                  value={editedValues[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  multiline
                  fullWidth
                />
              </Grid>
              <Button variant="text" onClick={handleSaveClick} sx={{ position: 'absolute', right: 0, top: -6 }}>
                Save
              </Button>
              <Button variant="text" onClick={handleCancelClick} sx={{ position: 'absolute', right: 50, top: -6 }}>
                Cancel
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <Grid>{item.title}</Grid>
              <Grid md={12}>{item.value}</Grid>
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
