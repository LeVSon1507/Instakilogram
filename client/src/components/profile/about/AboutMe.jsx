  import { Box, Button, Grid } from '@mui/material';
  import React, { useState } from 'react';
  import { Contact } from './component/Contact';
  import { Hobbies } from './component/Hobbies';
  import { Relationship } from './component/Relationship';
  import { Work } from './component/Work';
  import { Places } from './component/Places';

  export const AboutMe = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const data = [
      { title: 'Contact and Basic Info', component: Contact },
      { title: 'Hobbies and Interests', component: Hobbies },
      { title: 'Family and Relationship', component: Relationship },
      { title: 'Work and Education', component: Work },
      { title: "Pleace You're Lived", component: Places },
    ];

    const handleClick = (component) => {
      setActiveComponent(component);
    };

    const renderComponent = () => {
      if (activeComponent) {
        const Component = activeComponent.component;
        return <Component />;
      }

      return <Contact />;
    };

    return (
      <Grid
        container
        sx={{
          marginTop: 3,
          gap: 3,
        }}
      >
        <Grid
          item
          md={3}
          sx={{
            background: 'white',
            borderRadius: 3,
            padding: 3,
            height: 270,
          }}
        >
          <Box sx={{ width: '100%' }}>
            {data.map((item) => (
              <Button
                key={item.title}
                variant="text"
                sx={{
                  fontSize: 15,
                  textAlign: 'start',
                  backgroundColor: activeComponent?.title === item.title ? 'rgba(46, 138, 216, 1)' : '',
                  color: activeComponent?.title === item.title ? 'white' : '',
                  '&:hover': {
                    backgroundColor:
                      activeComponent?.title === item.title ? 'rgba(46, 138, 216, 1)' : 'rgba(128, 128, 128, 0.2)',
                    color: activeComponent?.title === item.title ? 'white' : '',
                  },
                  '&:focus': {
                    backgroundColor:
                      activeComponent?.title === item.title ? 'rgba(46, 138, 216, 1)' : 'rgba(128, 128, 128, 0.2)',
                    color: activeComponent?.title === item.title ? 'white' : '',
                  },
                  
                }}
                onClick={() => handleClick(item)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item md={8} sx={{
          display: 'block',
          background: 'white', borderRadius: 3,
          padding: 3,

        }}>
          {renderComponent()}
        </Grid>
      </Grid>
    );
  };
