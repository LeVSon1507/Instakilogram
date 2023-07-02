import { Avatar, Box, Grid, Icon, ImageList, ImageListItem } from "@mui/material";
import './Profile.scss'
import SideBar from "../sidebar/SideBar";
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import data from '../../assets/images/dataPost.json'

const Profile = () => {
  return (
    <div className="pageProfile">
      <div className="template">
        <div className="navbar"
        >
          <SideBar />
        </div>
        <div 
          md={10}
          className="profile"
        >
          <Grid className="flex-content">
            <Grid
              className="header"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 200,
                  maxHeight: 200
                }}
              />
              <Box className="flex-col">
                <Box className="flex-row">
                  <h7>0 Post</h7>
                  <h7>0 Follower</h7>
                  <h7>0 Following</h7>
                </Box>
                <h3>User Name</h3>
              </Box>
              <SettingsIcon/>
              Edit Profile
            </Grid>

          </Grid>
          <div className="flex-row">Tin nổi bật</div>
          <Grid className="flex-row"
            sx={{
              justifyContent: "center",
              marginTop: 2
            }}
          >
            <AddCircleIcon sx={{
              height: 40,
              width: 40
            }}/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Grid>
          <div className="flex-row title">
            Poster
          </div>
          <div className="flex-row" >
          <ImageList className="image-list" sx={{ width: "100%", height: "100%" }} variant="" cols={4} gap={8} rowHeight="auto">
            {data.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
