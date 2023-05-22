

import React, { useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import MoveDetails from './MoveDetails';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://test.api.boxigo.in/sample-data/');
        const data = response.data;
        // Store the data in the component state or pass it to child components as props
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Rest of your component code

  return (
    <div className="App">
      {/* Your UI components */}
      <MoveDetails/>
    </div>
  );
}


export default App;
