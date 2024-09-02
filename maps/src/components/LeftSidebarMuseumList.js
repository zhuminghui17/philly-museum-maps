import React, { useState, useEffect } from 'react';
import './LeftSidebarMuseumList.css';

const LeftSidebarMuseumList = ({ museums, selectedMuseum: initialSelectedMuseum, onSelectMuseum }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuseum, setSelectedMuseum] = useState(initialSelectedMuseum);

  useEffect(() => {
    setSelectedMuseum(initialSelectedMuseum);
  }, [initialSelectedMuseum]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (museum) => {
    setSelectedMuseum(museum);
    onSelectMuseum(museum);
  };

  const filteredMuseums = museums.filter((museum) =>
    museum.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="left-sidebar">
      <h2>🎨 Philly Museum Maps</h2>
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
    </div>
  );
};

export default LeftSidebarMuseumList;
