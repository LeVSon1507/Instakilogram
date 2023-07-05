import { Button, Card, CardContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import Input from '@mui/joy/Input';


export const EditProfile = () => {
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div>
      <div className="userName">
          <h4>Username: <br /> http.7evenice</h4>
          </div>
          <div className="flex-col">
            <div className="content-edit">
              <h3 className="intro-name">Name</h3>
              <Input placeholder="Nghĩa Đẹp Trai" variant="outlined" color="primary" />
              <button className="edit" >Edit</button>
            </div>
            <div className="content-edit">
              <h3 className="intro-name">Username</h3>
              <Input placeholder="http.7evenice" variant="outlined" color="primary" />
              <button className="edit" >Edit</button>
            </div>
            <div className="content-edit">
              <h3 className="intro-name">Password</h3>
              <Input placeholder="**********" variant="outlined" color="primary" />
                <button className="edit" onClick={() => setIsEditingPassword(true)}>Edit</button>
              </div>
              {isEditingPassword && (
                <Card className="password-card">
                  <CardContent>
                  <div className="new-task">
                    <h3 className="intro-name">Change Password</h3>
                    <div className="password-input">
                      <TextField
                        label="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="password-input">
                      <TextField
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="password-input">
                      <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="password-actions">
                      <Button variant="contained" color="primary">
                        Save
                      </Button>
                      <Button onClick={() => setIsEditingPassword(false)}>Cancel</Button>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            <div className="content-edit">
              <h3 className="intro-name">University</h3>
              <Input placeholder="FPT University DA NANG" variant="outlined" color="primary" />
              <button className="edit" >Edit</button>
            </div>
            <div className="content-edit">
              <h3 className="intro-name">Location</h3>
              <Input placeholder="Nam Phuoc - Duy Xuyen - Quang Nam" variant="outlined" color="primary" />
              <button className="edit" >Edit</button>
            </div>
            
          </div>  
    </div>
  )
}

