// src/components/RightSidebarMuseumDetails.js
import React from 'react';
import './RightSidebarMuseumDetails.css';

const RightSidebarMuseumDetails = ({ museum }) => {
  if (!museum) return <div className="right-sidebar">No museum selected</div>;

  return (
    <div className="right-sidebar">
      <div className="museum-details">
        <h2>{museum.name}</h2>
        <p><strong>Address:</strong> {museum.address}</p>
        <p><strong>Description:</strong> {museum.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default RightSidebarMuseumDetails;
