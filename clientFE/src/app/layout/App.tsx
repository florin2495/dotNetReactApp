import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const title = 'Welcome to Florin activities page'

  const [activities, setActivities] = useState<Activity[]>([]);

  // useEffect(() => {
  //   fetch('https://localhost:7218/api/activities')
  //     .then(response => response.json())
  //     .then(data => setActivities(data))

  // }, [])
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7218/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])
  return (
    <>
      <Typography variant='h3'>{title}</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
