import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export const EditProfile = () => {
  const [username, setUsername] = useState("NghiaDepTrai");
  const [name, setName] = useState("Nguyễn Đức Nghĩa");
  const [password, setPassword] = useState("********");
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEditUsername = () => {
    setIsEditingUsername(true);
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  const handleSave = () => {
    // Perform save operation or update the user's username, name, and password
    setIsEditingUsername(false);
    setIsEditingName(false);
    setIsEditingPassword(false);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordError("");
    setConfirmPassword(e.target.value);
  };

  const handlePasswordValidation = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div>
      <div>
              <p className="form">
                Username:{" "}
                {isEditingUsername ? (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button variant="outlined" onClick={handleSave}>
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    {username}{" "}
                    <Button variant="outlined" onClick={handleEditUsername}>
                      Edit
                    </Button>
                  </>
                )}
              </p>
              <p className="form">
                Name:{" "}
                {isEditingName ? (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Button variant="outlined" onClick={handleSave}>
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    {name}{" "}
                    <Button variant="outlined" onClick={handleEditName}>
                      Edit
                    </Button>
                  </>
                )}
              </p>
              <p className="form">
                Password:{" "}
                {isEditingPassword ? (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="password"
                      label="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="password"
                      label="New Password"
                      value={newPassword}
                      onChange={handlePasswordChange}
                      onBlur={handlePasswordValidation}
                      error={passwordError !== ""}
                      helperText={passwordError}
                    />
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      onBlur={handlePasswordValidation}
                      error={passwordError !== ""}
                      helperText={passwordError}
                    />
                    <Button variant="outlined" onClick={handleSave}>
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    ********{" "}
                    <Button variant="outlined" onClick={handleEditPassword}>
                      Edit
                    </Button>
                  </>
                )}
              </p>
            </div>
    </div>
  )
}

