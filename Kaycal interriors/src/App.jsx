import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute'; 
import { auth } from './Firebase/config';

function images(){
  return(
    <div>
      <h1>Hello world.</h1>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path='about' element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
