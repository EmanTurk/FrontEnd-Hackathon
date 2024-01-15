import React, { useEffect, useState } from "react";
import amirImage from "../assets/amir.jpg";
import danaImage from "../assets/dana.jpg";
import yamImage from "../assets/yam.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activities, setActivities] = useState([])
    const navigate = useNavigate()
  const users = [
    {
      name: "Yulia Or",
      location: "North",
      skills: [
        "Community Clean-Up",
        "Gardening",
        "Food Distribution",
      
      ],
      imageUrl: danaImage,
    },
    {
      name: "Amar Dor",
      location: "South",
      skills: ["Gardening", "Food Distribution", "Elderly Assistance"],
      imageUrl: yamImage,
    },
    {
      name: "Amir Sam",
      location: "North",
      skills: ["Educational Tutoring", "Animal Welfare", "Elderly Assistance"],
      imageUrl: amirImage,
    },
    {
      name: "Shahar Cohen",
      location: "North",
      skills: ["Educational Tutoring", "Food Distribution", "Animal Welfare"],
      imageUrl: danaImage,
    },
    {
      name: "Sami Odeh",
      location: "West",
      skills: ["Food Distribution", "Animal Welfare", "Animal Welfare"],
      imageUrl: amirImage,
    },
    {
      name: "Yam Dor",
      location: "North",
      skills: ["Food Distribution", "Elderly Assistance", "Community Clean-Up"],
      imageUrl: yamImage,
    },
    {
      name: "Dana Aiz",
      location: "South",
      skills: ["Elderly Assistance", "Community Clean-Up", "Educational Tutoring"],
      imageUrl: danaImage,
    },
    {
      name: "Karim Amir",
      location: "South",
      skills: ["Gardening", "Elderly Assistance", "Animal Welfare"],
      imageUrl: amirImage,
    },
  ];
  const handleButtonClick = (action) => {
    // Update the current index to show the next user
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    
    // If needed, you can also handle the action (Ignore/Match) here
    console.log(action, users[currentIndex]);
};

useEffect(()=>{
    try{
        const res = async ()=>{
            const result = await axios("https://chatbotx-v0qa.onrender.com/api/v1/activities")
            setActivities(result.data)
        }
        res()
    }catch(err){
        console.log(err)
    }
   
},[])

const drawActivites = ()=>{
    return activities.map((act)=>{
        return <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} onClick={()=> navigate(`/activityPage/${act._id}`)}>
<Card sx={{ maxWidth: 300 }}>
<CardContent>
<Typography variant="h5" component="div"> {act.name}</Typography>
<Typography variant="h5" component="div"> {act.description}</Typography>
</CardContent>
</Card>
        </Box>
    })
}
return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        {users.length > 0 && currentIndex < users.length && (
            <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                    <img src={users[currentIndex].imageUrl} alt={users[currentIndex].name} style={{ width: '100%', height: 'auto', borderBottom: '1px solid #eee' }} />
                    <Typography variant="h5" component="div">
                        {users[currentIndex].name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {users[currentIndex].location}
                    </Typography>
                    <Box>
                        {users[currentIndex].skills.map((skill, index) => (
                            <Button size="small" variant="outlined" sx={{ m: 0.5 }} key={index}>
                                {skill}
                            </Button>
                        ))}
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 1 }}>
                    <Button size="small" onClick={() => handleButtonClick('Ignore')} sx={{ bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}>Ignore</Button>
                    <Button size="small" onClick={() => handleButtonClick('Match')} sx={{ bgcolor: 'green', color: 'white', '&:hover': { bgcolor: 'darkgreen' } }}>Match</Button>
                </CardActions>
            </Card>
        )}
    </Box>
    <div style={{display:'flex', gap:"20px", justifyContent:'center', alignItems:"center"}}>
                {drawActivites()}    
                </div>     
    </>
);
};

export default HomePage;
