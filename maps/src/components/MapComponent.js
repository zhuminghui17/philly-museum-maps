// src/components/MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import './MapComponent.css';

// Fixing default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = ({ selectedMuseum, onMarkerClick }) => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    // Load the museums data
    axios.get('/museum-data.json')
      .then(response => setMuseums(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <MapContainer center={[39.9526, -75.1652]} zoom={13} className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {museums.map((museum, index) => (
        <Marker
          key={index}
          position={museum.location}
          
          eventHandlers={{
            click: () => {
              onMarkerClick(museum);
            },
          }}
        >
          <Popup>
            <strong>{museum.name}</strong><br />
            {museum.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
