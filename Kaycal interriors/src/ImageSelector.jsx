import React from 'react';

const DesignSelector = ({ onSelect }) => {
  return (
    <div>
      <h2>Select a Room Design</h2>
      <button onClick={() => onSelect('living-room')}>Living Room</button>
      <button onClick={() => onSelect('kitchen')}>Kitchen</button>
      <button onClick={() => onSelect('bedroom')}>Bedroom</button>
    </div>
  );
};

export default ImageSelector;