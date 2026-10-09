import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const title = 'Welcome to Florin activities page'

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7218/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))

  }, [])
  return (
    <div>
      <h3 className="app" style={{ color: 'red' }}>{title}</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
