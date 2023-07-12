import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Input, TextField, Typography } from "@mui/material";
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
        height: '200%',
        width: '100%',
        background: 'rgba(128, 128, 128, 0.2)',
      }}
    >
      <Grid
        item
        md={2}
        sx={{
          height: 'auto',
          width: '100%',
        }}
        className="sidebar-grid"
      >
        <SideBar />
      </Grid>
      <Grid
        item
        md={9}
        className="slide2"
        sx={{
          height: 'auto',
          width: '100%',
          // background: "rgba(128, 128, 128, 0.2)"
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Avatar
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340767734_531530315814851_7073978951600084146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FvSwnkjuY3kAX_ic4u1&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCD4l-hZvH5JHeumLjwIL2lavb883KkeYonb2kUAbJcwA&oe=64ABDAD4"
            sx={{
              width: '30%',
              height: 'auto',
              display: 'block',
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{
              width: '100%',
              position: 'absolute',
              bottom: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            Nguyễn Đức Nghĩa{' '}
          </Typography>
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
            }}
          >
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 10,
            }}
          >
            <h3>
              Post <br /> 56
            </h3>
            <h3>
              Follower <br /> 32
            </h3>
            <h3>
              Following <br /> 2.000.000
            </h3>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '4%',
            // background: 'white',
            // borderRadius: 3,
          }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              sx={{
                fontSize: '15px',
                fontWeight: 'bold',
                width: '100%',
                border: 2,
                borderRadius: 10,
                backgroundColor: activeTab === tab.id ? 'rgba(46, 138, 216, 1)' : '',
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

