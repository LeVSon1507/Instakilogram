import { Grid } from '@mui/material';
import React from 'react';

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
      value: 'The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.',
    },
  ];

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
      {data.map((item) => (
        <Grid container gap={1} sx={{ fontSize: 20, marginTop: 3 }}>
          <Grid>{item.title}</Grid>
          <Grid>{item.value}</Grid> 
        </Grid>
      ))}
    </Grid>
  );
};
