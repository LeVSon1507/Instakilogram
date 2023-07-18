import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Add from '../../home/add/Add';
import CenterDialog from './centerdialog/CenterDialog';
import DeleteIcon from '@mui/icons-material/Delete';

export const TimeLine = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [jobDataList, setJobDataList] = useState([]);
  const [inputData, setInputData] = useState({
    image: '',
    title: '',
    date: '',
  });

  const handleDeleteJobData = (index) => {
    setSelectedJobIndex(index);
    setDeleteConfirmation(true);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
    setSelectedJobIndex(null);
  };

  const handleConfirmDelete = () => {
    if (selectedJobIndex !== null) {
      const updatedJobDataList = jobDataList.filter((_, i) => i !== selectedJobIndex);
      setJobDataList(updatedJobDataList);
    }
    setDeleteConfirmation(false);
    setSelectedJobIndex(null);
  };

  const handleSaveJobData = (data) => {
    setJobDataList([...jobDataList, data]);
    setInputData({
      image: '',
      title: '',
      date: '',
    });
    handleCloseDialog();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <Box>
      <CenterDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSave={handleSaveJobData}
        inputData={inputData}
        handleInputChange={handleInputChange}
      />
      <Grid
        container
        sx={{
          marginTop: 3,
          borderRadius: 3,
        }}
      >
        <Grid container>
          <Grid item md={3}>
            <Grid
              sx={{
                background: 'white',
                padding: 3,
                borderRadius: 3,
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                  marginY: 3,
                }}
              >
                <Typography variant="h8" sx={{ margin: 0, whiteSpace: 'nowrap' }}>
                  Life Event
                </Typography>
                <Box sx={{ flex: 1 }} />
                <Button
                  sx={{
                    width: '40%',
                    fontSize: '13px',
                  }}
                  onClick={handleOpenDialog}
                >
                  Create
                </Button>
              </Box>

              {jobDataList.map((jobData, index) => (
                <Box
                  key={index}
                  position="relative"
                  sx={{
                    borderBottom: 1,
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    }}
                    onClick={() => handleDeleteJobData(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Avatar
                    src={jobData.image}
                    sx={{
                      width: '80%',
                      height: 'auto',
                      borderRadius: '0',
                      margin: '0 auto',
                      border: '5px solid rgba(0, 0, 0, 0.5)',
                      marginTop: 5,
                    }}
                  />
                  <Typography variant="h5" color="initial" sx={{ textAlign: 'center' }}>
                    {jobData.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ textAlign: 'center', fontSize: 14, marginBottom: 3 }}
                  >
                    {jobData.date}
                  </Typography>
                  <Dialog open={deleteConfirmation} onClose={handleCancelDelete}>
                    <DialogTitle>Xác nhận xóa</DialogTitle>
                    <DialogContent>
                      <Typography>Bạn có chắc chắn muốn xóa công việc này?</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCancelDelete}>Hủy</Button>
                      <Button onClick={handleConfirmDelete} variant="contained" color="error">
                        Xóa
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              ))}
            </Grid>
            <Grid
              sx={{
                background: 'white',
                padding: 3,
                borderRadius: 3,
                width: '100%',
                marginTop: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '10px',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h8"
                  sx={{ margin: 0, whiteSpace: 'nowrap', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%' }}
                >
                  Photos
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              sx={{
                background: 'white',
                padding: 3,
                borderRadius: 3,
                width: '100%',
                marginTop: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '10px',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h8"
                  sx={{ margin: 0, whiteSpace: 'nowrap', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%' }}
                >
                  Friends
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '30%',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                    <Typography
                      color="initial"
                      sx={{
                        fontSize: 'smaller',
                        textAlign: 'center',
                      }}
                    >
                      Trần Văn Nhộng
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '30%',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                    <Typography
                      color="initial"
                      sx={{
                        fontSize: 'smaller',
                        textAlign: 'center',
                      }}
                    >
                      Trần Văn Nhộng
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '30%',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                    <Typography
                      color="initial"
                      sx={{
                        fontSize: 'smaller',
                        textAlign: 'center',
                      }}
                    >
                      Trần Văn Nhộng
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '30%',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                    <Typography
                      color="initial"
                      sx={{
                        fontSize: 'smaller',
                        textAlign: 'center',
                      }}
                    >
                      Trần Văn Nhộng
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '30%',
                    }}
                  >
                    <Avatar
                      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299851551_1654830928221094_6493440420507434262_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=0GOhBEvnoKQAX_L3saN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDpCqlxJuUpzJE0nPc_na-uOzitpS0ultVgmCePRtIGug&oe=64AC1C5E"
                      sx={{
                        width: 80,
                        height: 'auto',
                        borderRadius: 0,
                      }}
                    />
                    <Typography
                      color="initial"
                      sx={{
                        fontSize: 'smaller',
                        textAlign: 'center',
                      }}
                    >
                      Trần Văn Nhộng
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={10}>
            <Add />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
