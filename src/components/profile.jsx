import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import yamImage from "../assets/yam.jpg";

function ProfilePage() {
  const theme = useTheme();
  const user = {
    name: 'Amar Dor',
    age: 21,
    location: 'North',
    skills: ["Gardening", "Food Distribution", "Elderly Assistance"],
    imageUrl: yamImage,
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper sx={{ p: 3, width: '100%', maxWidth: theme.breakpoints.values.sm, mb: 2, textAlign: 'center' }}>
        <Avatar 
          src={user.imageUrl} 
          alt={user.name} 
          sx={{ width: 100, height: 100, margin: '0 auto' }} 
        />
        <Typography variant="h4" component="h1" sx={{ mt: 2, mb: 2 }}>
          Hello, {user.name}
        </Typography>
        <Typography variant="h6">Name: {user.name}</Typography>
        <Typography variant="h6">Age: {user.age}</Typography>
        <Typography variant="h6">Location: {user.location}</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Skills:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {user.skills.map(skill => (
            <Typography key={
skill} variant="body1" component="div" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '10px', padding: '4px 8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
{skill}
</Typography>
))}
</Box>
</Paper>
</Box>
);
}

export default ProfilePage;