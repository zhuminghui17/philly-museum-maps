import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css';

// Fixing default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Component to handle map center and popup when selectedMuseum changes
const MapCenterAndPopupHandler = ({ selectedMuseum, markersRef }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedMuseum && markersRef.current[selectedMuseum.name]) {
      const marker = markersRef.current[selectedMuseum.name];
      map.flyTo(selectedMuseum.location, 14, {
        animate: true,
        duration: 1.5,
      });
      marker.openPopup();
    }
  }, [selectedMuseum, map, markersRef]);

  return null;
};

const MapComponent = ({ selectedMuseum, museums, onMarkerClick }) => {
  const markersRef = React.useRef({});

  return (
    <MapContainer
      center={selectedMuseum ? selectedMuseum.location : [39.9526, -75.1652]}
      zoom={selectedMuseum ? 15 : 13}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapCenterAndPopupHandler selectedMuseum={selectedMuseum} markersRef={markersRef} />

      {museums.map((museum, index) => (
        <Marker
          key={index}
          position={museum.location}
          eventHandlers={{
            click: () => onMarkerClick(museum),
          }}
          ref={(el) => {
            if (el) {
              markersRef.current[museum.name] = el;
            }
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
