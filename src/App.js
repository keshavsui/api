import React, { useState, useEffect } from 'react'; 
const App = () => { 
const [dogImage, setDogImage] = useState(''); 
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null); 
useEffect(() => { 
    fetch('https://dog.ceo/api/breeds/image/random') // Fetch random dog image 
      .then((response) => response.json()) 
      .then((data) => { 
        setDogImage(data.message); // Set image URL from API response 
        setLoading(false); 
      }) 
      .catch(() => { 
        setError('Error fetching dog image'); 
        setLoading(false); 
      }); 
  }, []); 
 
  return ( 
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}> 
      <h1>Random Dog Image</h1> 
      {loading ? ( 
        <p>Loading...</p> 
      ) : error ? ( 
        <p>{error}</p> 
      ) : ( 
        <div> 
          <img src={dogImage} alt="Random Dog" style={{ width: '300px', borderRadius: '10px' }} /> 
          <p>Woof! Here's a random dog image for you.</p> 
        </div> 
)} 
</div> 
); 
}; 
export default App; 
