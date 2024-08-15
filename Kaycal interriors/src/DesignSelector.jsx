import React from 'react';

const DesignSelector = ({ onSelect }) => {
  return (
    <div>
      <button onClick={(images) => onSelect('Design 1')}>Design 1</button>
      <button onClick={() => onSelect('Design 2')}>Design 2</button>
      {}
    </div>
  );
};

export default DesignSelector;
