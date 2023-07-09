import { Grid } from '@mui/material';
import React from 'react';

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
        <Grid container gap={20} sx={{ fontSize: 20, marginTop: 3 }}>
            <React.Fragment key={index}>
              <Grid md={2}>{item.label}</Grid>
              <Grid md={7}>{item.value}</Grid>
            </React.Fragment>
        </Grid>
      ))}
    </Grid>
  );
};
