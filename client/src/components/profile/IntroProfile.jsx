import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from 'react'

export const IntroProfile = () => {
  return (
    <div className="content-slide">
          <div className="content-container">
            <div className="content-bio">
              <div className="title-intro">INTRODUCTION</div>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, itaque modi ipsam in id natus
                quam placeat optio laboriosam! Impedit earum atque fugit nesciunt nulla eveniet delectus, pariatur
                enim! Obcaecati.
              </p>
              <button className="edit">Edit</button>
            </div>
            <div className="content-intro">
              <div className="content-set">
                <div className="title">Location</div>
                <span className="data">Nam Phuoc - Duy Xuyen - Quang Nam</span>
              </div>
              <div className="content-set">
                <div className="title">University</div>
                <span className="data">FPT University DA NANG</span>
              </div>
              <div className="content-set">
                <div className="title">Major</div>
                <span className="data">International Technology</span>
              </div>
              <div className="content-set">
                <div className="title">DoB</div>
                <span className="data">08-09-2001</span>
              </div>
              <div className="content-set">
                <div className="title">Gender</div>
                <span className="data">Male</span>
              </div>
              <div className="content-set">
                <div className="title">Relationship</div>
                <span className="data">Single</span>
              </div>
            </div>
          </div>
          <div className="slide-right">
            <div className="check-in">Check-ins</div>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea
                sx={{
                  height: "auto",
                  width: 400
                }}>
                <CardMedia
                  component="img"
                  image="https://fpt.com.vn/-/media/project/fpt-corporation/fpt/common/images/navigation/logo/fpt-logo-open-graph.png"
                  alt="green iguana"
                  sx={{
                    width: 100, // Specify the desired width
                    height: 100, // Specify the desired height
                  }}
                />
                <CardContent sx={{
                  padding: 1,
                  margin: 0
                }}>
                  <Typography gutterBottom variant="h6" component="div">
                    FPT University
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dai Hoc FPT - Nam Ki Khoi Nghia - Ngu Hanh Son
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              maxWidth: 345,
              marginTop : 3
            }}>
              <CardActionArea
                sx={{
                  height: "auto",
                  width: 400
                }}>
                <CardMedia
                  component="img"
                  image="https://img.freepik.com/premium-vector/elegant-coffee-shop-logo-with-king-head-monoline_555909-454.jpg?w=2000"
                  alt="green iguana"
                  sx={{
                    width: 100, // Specify the desired width
                    height: 100, // Specify the desired height
                  }}
                />
                <CardContent sx={{
                  padding: 1,
                  margin: 0
                }}>
                  <Typography gutterBottom variant="h6" component="div">
                    The Cooffe House
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    78 Le Van Hien - Ngu Hanh Son - Da Nang
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
  )
}
