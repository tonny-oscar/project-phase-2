import React, { useState } from 'react';
import DesignSelector from './DesignSelector';
import DesignDisplay from './DesignDisplay';
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
