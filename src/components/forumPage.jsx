import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Box, Typography } from '@mui/material';
import { UserContext } from '../userContext';

  
  
    // const handleSubmit = () => {
    //   setUser(userInfo);
    //   navigate('/profile');
    // };

const WelcomePage = () => {
    const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    imageUrl: '',
    description: '',
    skills: [],
    location:''
  });
  const navigate = useNavigate();
  const skillsList = [
    "Community Clean-Up",
    "Educational Tutoring",
    "Elderly Assistance",
    "Animal Welfare",
    "Food Distribution",
    "Event Volunteering",
    "Gardening",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSkillsChange = (event) => {
    const { value } = event.target;
    setUserInfo({
      ...userInfo,
      skills: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSubmit = () => {
    console.log('User Info Submitted:', userInfo);
    // Here you would typically send this data to your backend

    navigate('/profile'); // Redirect to profile page after submission
  };

 
return (
<Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<Typography variant="h4" sx={{ mb: 2 }}>
Welcome to AidMate
</Typography>
<FormControl fullWidth sx={{ mb: 2 }}>
<TextField
       label="Name"
       variant="outlined"
       name="name"
       value={userInfo.name}
       onChange={handleChange}
     />
</FormControl>
<FormControl fullWidth sx={{ mb: 2 }}>
<TextField
       label="Image URL"
       variant="outlined"
       name="imageUrl"
       value={userInfo.imageUrl}
       onChange={handleChange}
     />
</FormControl>
<FormControl fullWidth sx={{ mb: 2 }}>
<TextField
       label="Description"
       variant="outlined"
       name="description"
       multiline
       rows={4}
       value={userInfo.description}
       onChange={handleChange}
     />
</FormControl>
<FormControl fullWidth sx={{ mb: 2 }}>
<InputLabel>Skills</InputLabel>
<Select
multiple
name="skills"
value={userInfo.skills}
onChange={handleSkillsChange}
input={<OutlinedInput label="Skills" />}
renderValue={(selected) => selected.join(', ')}
>
{skillsList.map((skill) => (
<MenuItem key={skill} value={skill}>
{skill}
</MenuItem>
))}
</Select>
</FormControl>
<Button variant="contained" color="primary" onClick={handleSubmit}>
Add
</Button>
</Box>
);
};

export default WelcomePage;