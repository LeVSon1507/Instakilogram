import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './AuthPage.scss';
import { logoInsta } from '../utils/constant';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const emailRegex = /^[^\s@]+@fpt\.edu\.vn$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    axios
      .post('http://localhost:8080/auth/login', user)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem('accessToken', response.data.accessToken);
          navigate('/home');
        } else {
          toast.error('Invalid credentials');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error occurred while logging in.');
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (
      !formData.get('instaName') ||
      !formData.get('userName') ||
      !formData.get('email') ||
      !formData.get('password')
    ) {
      toast.error('Please not empty textbox');
    } else if (!emailRegex.test(formData.get('email'))) {
      toast.error('Please check fpt mail');
    } else if (!passwordRegex.test(formData.get('password'))) {
      toast.error('Password must contain capital letters,numbers and more than 8 characters ');
    } else {
      const user = {
        instaName: formData.get('instaName'),
        userName: formData.get('userName'),
        email: formData.get('email'),
        password: formData.get('password'),
      };
      axios
        .post('http://localhost:8080/auth/register', user)
        .then(() => {
          toast.success('User registered successfully.');
          setTimeout(() => setSignIn(true), 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error('An error occurred while registering user.');
        });
    }
  };
  return (
    <Box className="auth-container">
      <ToastContainer />
      <Box className="box-auth">
        <Avatar src={logoInsta} alt="logo" sx={{ mt: '30px' }}></Avatar>
        <Typography variant="h4" padding={3} textAlign={'center'}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Typography>
        <Box component="form" noValidate onSubmit={isSignIn ? handleSignIn : handleSignUp} className="form">
          {!isSignIn && (
            <>
              <TextField
                autoComplete="given-name"
                name="instaName"
                required
                id="instaName"
                label="Insta Name"
                autoFocus
              />
              <TextField required id="userName" label="User Name" name="userName" autoComplete="family-name" />
            </>
          )}
          <TextField required id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" className="submit-button">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
          <Box className="forgot-password">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>

            <Link onClick={() => setSignIn(!isSignIn)} variant="body2">
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </Link>
          </Box>
          <Box paddingTop={3}>
            <FacebookIcon sx={{ marginRight: 3 }} />
            <InstagramIcon sx={{ marginRight: 3 }} />
            <TwitterIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
