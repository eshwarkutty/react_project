import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; 

const Header = () => {
    return (
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React Project
                </Typography>
                <nav>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Button component={Link} to="/" color="inherit">
                                Home
                            </Button>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Button component={Link} to="/dashboard" color="inherit">
                                Profile
                            </Button>
                        </li>
                        <li style={{ display: 'inline-block' }}>
                            <Button component={Link} to="/login" color="inherit">
                                Logout
                            </Button>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
