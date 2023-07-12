import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: " 40% "
}));

const Icons = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "none",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    INSTAKILOGRAM
                </Typography>
                <Search>
                    <InputBase placeholder="search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: "30", height: "30" }}
                        src="http://chatvia-dark.react.themesbrand.com/static/media/logo.e41f6087382055646c1c02d0a63583d5.svg"
                    onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox>

                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar