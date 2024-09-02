// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ museums, onSelectMuseum }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMuseums = museums.filter((museum) =>
    museum.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (museum) => {
    setSelectedMuseum(museum);
    onSelectMuseum(museum);
  };

  return (
    <div className="sidebar">
      <h1>🎨 Philly Art Museums</h1>
      <input
        type="text"
        placeholder="Search museums..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="museum-list">
        {filteredMuseums.map((museum, index) => (
          <div
            key={index}
            className={`museum-item ${selectedMuseum === museum ? 'selected' : ''}`}
            onClick={() => handleSelect(museum)}
          >
            <h3>{museum.name}</h3>
            <p>{museum.address}</p>
          </div>
        ))}
      </div>
      {selectedMuseum && (
        <div className="museum-details">
          <h2>{selectedMuseum.name}</h2>
          <p><strong>Address:</strong> {selectedMuseum.address}</p>
          <p><strong>Description:</strong> A beautiful art museum in Philadelphia.</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
