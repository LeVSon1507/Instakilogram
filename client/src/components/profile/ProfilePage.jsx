import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import SideBar from "../sidebar/SideBar";
import "./Profile.scss";
import { IntroProfile } from "./IntroProfile";
import RecipeReviewCard from "./PostProfile";

const Profile = () => {
  return (
  <div className="profile-container" style={{ overflow: "hidden" }}>
    <Grid container>
        <Grid item md={2}
          sx={{
            padding: 0,
            margin:0
          }}
        >
        <SideBar className="slide1" />
      </Grid>
      <Grid item md={10} className="slide2">
        <div className="img-container">
          <img
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/31110119/USa-visa.jpg"
            alt=""
            className="cover-image"
          />
          <div className="user">
            <img
              src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340767734_531530315814851_7073978951600084146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FvSwnkjuY3kAX81kdhd&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAaDCx_6t0-qdZXUzzrFCe9BwBhx_3g-UH5h-hA5cG-8w&oe=64A7E654"
              alt=""
              className="avatar"
            />
            <div className="user-name">Nghĩa Đẹp Trai</div>
          </div>
        </div>
        <div className="content-button">
          <div className="button-list">
            <Button >Intro</Button>
            <Button >Post</Button>
            <Button >Follower</Button>
            <Button >Following</Button>
            <Button >Edit</Button>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
  );
};

export default Profile;
