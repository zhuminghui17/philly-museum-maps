import React, { useState, useEffect } from 'react';
import './App.css';
import LeftSidebarMuseumList from './components/LeftSidebarMuseumList';
import MapComponent from './components/MapComponent';
import RightSidebarMuseumDetails from './components/RightSidebarMuseumDetails';

function App() {
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    const fetchMuseums = async () => {
      const response = await fetch('/museum-data.json');
      const data = await response.json();
      setMuseums(data);
      setSelectedMuseum(data[0]); // Default to the first museum in the list
    };

    fetchMuseums();
  }, []);

  const handleSelectMuseum = (museum) => {
    setSelectedMuseum(museum);
  };

  return (
    <div className="App">
      <LeftSidebarMuseumList 
        museums={museums} 
        selectedMuseum={selectedMuseum} 
        onSelectMuseum={handleSelectMuseum} 
      />
      <MapComponent 
        museums={museums}
        selectedMuseum={selectedMuseum} 
        onMarkerClick={handleSelectMuseum} 
      />
      <RightSidebarMuseumDetails 
        museum={selectedMuseum} 
      />
    </div>
  );
}

export default App;
