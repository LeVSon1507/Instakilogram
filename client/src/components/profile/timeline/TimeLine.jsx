import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PostList from '../../layouts/PostList'

export const TimeLine = () => {
  return (
    <Grid container sx={{
          marginTop: 3,
        }}>
          <Grid container>
            <Grid item md={3}>
              <Grid  sx={{
                background: "white", 
                padding: 3,
                borderRadius: 3,
                width: "100%"
              }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" , borderBottom: "1px solid rgba(0, 0, 0, 0.2)" , marginY: 3}}>
                  <Typography variant="h5" sx={{ margin: 0, whiteSpace: "nowrap" }}>Life Event</Typography>
                  <Box sx={{ flex: 1 }} />
                  <Button sx={{
                    width: "40%"
                  }}>Create</Button>
                </Box>
                
                <Avatar
                  src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340767734_531530315814851_7073978951600084146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FvSwnkjuY3kAX_ic4u1&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCD4l-hZvH5JHeumLjwIL2lavb883KkeYonb2kUAbJcwA&oe=64ABDAD4"
                  sx={{
                    width: '80%',
                    height: "auto",
                    borderRadius: "0",
                    margin: "0 auto",
                    border: "5px solid rgba(0, 0, 0, 0.5)",
                    marginTop: 5
                  }}
                />
                <Typography variant="h5" color="initial" sx={{ textAlign: "center" }}>Start new Job</Typography>
                <Typography variant="body2" color="initial" sx={{ textAlign: "center", fontSize: 16 }}>07-07-2023</Typography>
              </Grid>
              <Grid  sx={{
                background: "white", 
                padding: 3,
                borderRadius: 3,
                width: "100%",
                marginTop: 3
              }}>
                <Box sx={{
                  // background: "white", 
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "flex-start",
                  // alignItems: "flex-start",
                  gap: "10px",
                  padding: 3,
                  borderRadius: 3
                }}>
                  <Typography variant="h5" sx={{ margin: 0, whiteSpace: "nowrap", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", width: "100%", }}>Photo</Typography>
                  <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}>
                    <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid  sx={{
                background: "white", 
                padding: 3,
                borderRadius: 3,
                width: "100%",
                marginTop: 3
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px", 

                }}>
                  <Typography variant="h5" sx={{ margin: 0, whiteSpace: "nowrap", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", width: "100%", }}>Friends</Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "10px",
                    alignItems: "center"
                  }}>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <p className="name-friends">Trần Thị Nhộng</p>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <p className="name-friends">Văn Thị Thu </p>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <p className="name-friends">Trần Thị Bách </p>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <p className="name-friends">Lưu Manh Ghê</p>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <Avatar src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                    sx={{
                      width: 100,
                      height: "auto",
                      borderRadius: 0
                      }}
                    />
                    <p className="name-friends">Trần Văn C</p>
                    </Box>
                  </Box>
                </Box>

              </Grid>
            </Grid>
            <Grid item md={9}>
              <PostList/>
            </Grid>
          </Grid>
          <Box>
          </Box>
        </Grid>
  )
}
