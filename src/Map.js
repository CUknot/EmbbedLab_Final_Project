// src/Map.js
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import DustScoreMarker from './DustScoreMarker';

const Map = ({ 
  center = { lat: 40.748817, lng: -73.985428 }, // Default coordinates (New York)
  zoom = 11 
}) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [dustScore, setDustScore] = useState(null); // Example dust score

  const handleMapClick = ({ lat, lng }) => {
    console.log("Map clicked at: ", lat, lng);
    setMarkerPosition({ lat, lng });
    setDustScore(Math.floor(Math.random() * 100)); // Example dust score calculation
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={({ lat, lng }) => handleMapClick({ lat, lng })}
      >
        {markerPosition && (
          <DustScoreMarker 
            lat={markerPosition.lat}
            lng={markerPosition.lng}
            text={dustScore}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
