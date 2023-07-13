import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Avatar, Button } from '@mui/material';

const CenterDialog = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');

  const handleSave = () => {
    onSave({ title, date, image });
    onClose(); 
    setTitle(''); 
    setDate(''); 
    setImage(''); 
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title" maxWidth="xs" fullWidth>
      <DialogTitle id="dialog-title">Tiêu đề hộp thoại</DialogTitle>
      <DialogContent>
        <TextField label="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
        <TextField label="Ngày" value={date} onChange={(e) => setDate(e.target.value)} fullWidth margin="normal" />
        <Avatar
          src={image}
          sx={{
            width: '80%',
            height: 'auto',
            borderRadius: '0',
            margin: '0 auto',
            border: '5px solid rgba(0, 0, 0, 0.5)',
            marginTop: 5,
          }}
        />
        <TextField
          label="URL ảnh"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CenterDialog;
