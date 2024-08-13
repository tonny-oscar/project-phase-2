// src/App.jsx
import React, { useState } from 'react';
import ImageSelector from './ImageSelector';
import ImageDisplay from './Image display';
import './App.css';

const App = () => {
  const [selectedDesign, setSelectedDesign] = useState('');

  const handleSelect = (design) => {
    setSelectedDesign(design);
  };

  return (
    <div className="App">
      <h1>Interior Design App</h1>
      <DesignSelector onSelect={handleSelect} />
      <DesignDisplay design={selectedDesign} />
    </div>
  );
};

export default App;
