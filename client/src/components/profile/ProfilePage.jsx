import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Input, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import SideBar from "../sidebar/SideBar";
import "./Profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import { TbBorderRadius } from "react-icons/tb";
import { BsBorder } from "react-icons/bs";
import { TimeLine } from "./timeline/TimeLine";
import { AboutMe } from "./about/AboutMe";
import { PhotoProfile } from "./photos/PhotoProfile";
import { Friends } from "./friends/Friends";
import { useState } from "react";



const Profile = () => {
   const tabs = [
     { id: 'timeline', label: 'Timeline', component: <TimeLine /> },
     { id: 'about', label: 'About', component: <AboutMe/> },
     { id: 'friends', label: 'Friends', component: <Friends /> },
     { id: 'photos', label: 'Photos', component: <PhotoProfile /> },
   ];

   const [activeTab, setActiveTab] = useState('timeline');

   const handleTabClick = (tabId) => {
     setActiveTab(tabId);
   };
  
  return (
    <Grid
      container
      sx={{
        height: '100%',
        width: '100%',
        background: 'rgba(000, 000, 000, 0.2)',
        overflowX: 'hidden',
      }}
    >
      <Grid
        item
        md={2}
        sx={{
          height: 'auto',
        }}
        className="sidebar-grid"
      >
        <SideBar />
      </Grid>
      <Grid
        item
        md={10}
        className="slide2"
        sx={{
          width: '100%',
          height: '100%'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Avatar
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/278332607_1568939690143552_7512332174431310208_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NGB85JteidUAX_Khup2&_nc_ht=scontent.fdad3-4.fna&oh=00_AfANd8pTIoGfd9qk_yrw7T0xTSk1RMOrzN82F0DIixBb1A&oe=64B4AF30"
            sx={{
              height: '100%',
              width: '100%',
              borderRadius: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Avatar
              src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340767734_531530315814851_7073978951600084146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FvSwnkjuY3kAX_ic4u1&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCD4l-hZvH5JHeumLjwIL2lavb883KkeYonb2kUAbJcwA&oe=64ABDAD4"
              sx={{
                width: 250,
                height: 250,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -50,
                left: '50%',
                width: '100%',
                transform: 'translateX(-50%)',
              }}
            >
              <Typography variant="h5" component="h1" textAlign='center'>
                Nguyễn Đức Nghĩa
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 10,
              marginLeft: 3,
            }}
          >
            <FacebookIcon fontSize="medium" />
            <InstagramIcon fontSize="medium" />
            <TwitterIcon fontSize="medium" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 10,
              marginRight: 3,
            }}
          >
            <h5>
              Post <br /> 56
            </h5>
            <h5>
              Follower <br /> 32
            </h5>
            <h5>
              Following <br /> 2.000.000
            </h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '6%',
            gap: 13,
          }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              sx={{
                fontSize: '10px',
                fontWeight: 'bold',
                width: '100%',
                border: 2,
                borderRadius: 10,
                backgroundColor: activeTab === tab.id ? 'rgba(46, 138, 216, 1)' : 'white',
                color: activeTab === tab.id ? 'white' : '',
                '&:hover': {
                  backgroundColor: activeTab === tab.id ? 'rgba(46, 138, 216, 1)' : 'rgba(128, 128, 128, 0.2)',
                  color: activeTab === tab.id ? 'white' : '',
                },
                '&:focus': {
                  backgroundColor: activeTab === tab.id ? 'rgba(46, 138, 216, 1)' : 'rgba(128, 128, 128, 0.2)',
                  color: activeTab === tab.id ? 'white' : '',
                },
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
        {tabs.map((tab) => tab.id === activeTab && tab.component)}
      </Grid>
    </Grid>
  );
};

export default Profile;

