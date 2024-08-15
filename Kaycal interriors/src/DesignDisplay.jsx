// src/components/DesignDisplay.jsx
import React from 'react';

const DesignDisplay = ({ design }) => {
  const imageUrl = `/images/${design}.jpg`;

  return (
    <div>
      <h2>Room Design</h2>
      {design ? (
        <img src={imageUrl} alt={design} style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>Please select a room design.</p>
      )}
    </div>
  );
};

export default DesignDisplay;
