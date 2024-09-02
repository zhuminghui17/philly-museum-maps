// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MapComponent from './components/MapComponent';

function App() {
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  const handleSelectMuseum = (museum) => {
    setSelectedMuseum(museum);
    // Optionally, you can add logic to center the map on the selected museum
  };

  return (
    <div className="App">
      <Sidebar museums={selectedMuseum ? [selectedMuseum] : []} onSelectMuseum={handleSelectMuseum} />
      <MapComponent selectedMuseum={selectedMuseum} onMarkerClick={handleSelectMuseum} />
    </div>
  );
}

export default App;
