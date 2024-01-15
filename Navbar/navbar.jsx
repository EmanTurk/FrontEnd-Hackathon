import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; 
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../src/assets/logo2.png';  

function Navbar() {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ 
      bgcolor: 'white', 
      color: 'black', 
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)', 
      borderRadius: 0 
    }}>
      <Toolbar>
        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', mr: 150 }}>
          <img src={logoImage} alt="AidMate Logo" style={{ height: '100x', width: '130px' }} />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/home" sx={{ color: 'black' }}>Home</Button>
          <Button color="inherit" component={RouterLink} to="/search" sx={{ color: 'black' }}>Search</Button>
          <Button color="inherit" component={RouterLink} to="/profile" sx={{ color: 'black' }}>Profile</Button>
          <Button color="inherit" component={RouterLink} to="/log-out" sx={{ color: 'black' }}>Log Out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
