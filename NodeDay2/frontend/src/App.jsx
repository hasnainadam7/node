import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; // Ensure axios is imported.

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/jokes')
      .then((response) => {
        setJokes(response.data.jokes);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []); // Add an empty dependency array to run this effect only once.

  return (
 

    <div>
      {
        jokes.map((joke)=>{
            return <>
            
            <h1>
              {joke.id}
            </h1>
            <h1>
              {joke.joke}
            </h1>
            <h1>
              {joke.description}
            </h1>
            </>
        })
      }
    </div>
  );
}

export default App;
