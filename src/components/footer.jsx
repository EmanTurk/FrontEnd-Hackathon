import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logoImage from '../assets/logo2.png';  

function Footer() {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      borderTop: '1px solid #ddd', 
      mt: 8,
      bgcolor: 'black', // Set background color to black
      color: 'white', // Set text color to white
    }}>
      <Box>
        <img src={logoImage} alt="Logo" style={{ height: '100px', width: 'auto' }} /> {/* Increase logo size */}
      </Box>
      <Box>
        <Typography variant="body1">
          <Link href="/contact-us" color="inherit" underline="none">Contact Us</Link> {/* Remove underline */}
        </Typography>
        <Typography variant="body1">
          <Link href="/about-us" color="inherit" underline="none">About Us</Link> {/* Remove underline */}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
