import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ActivityPage() {
  const [activity, setActivity] = useState({});
  const { id } = useParams();
  const [messageGPT, setMessageGPT] = useState("");
  console.log(id);

  useEffect(() => {
    try {
      const res = async () => {
        const result = await axios(
          `https://chatbotx-v0qa.onrender.com/api/v1/activities/${id}`
        );
        setActivity(result.data);
      };
      res();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(activity);

  useEffect(() => {
    const res = async () => {
      const result = await axios.post(
        "https://chatbotx-v0qa.onrender.com/generate-stream-text",
        {
          prompt: activity.name,
        }
      );
      setMessageGPT(result.data);
    };
    res();
  }, [activity]);
  return <div style={{width:"60%", margin:"auto"}}>
    <h1>Activity</h1> <h2>{activity.name}</h2><h3>{activity.description}</h3>
   {messageGPT ? (<div>{messageGPT}</div>):(<div>loading message from GPT ....</div>)} 
    </div>;
}
