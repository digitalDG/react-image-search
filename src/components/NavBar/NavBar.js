import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                PixaBay Image Search
            </Typography>
        </AppBar>
    );
};

export default NavBar;