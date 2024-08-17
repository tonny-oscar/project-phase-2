import React from 'react';
import { Navigate } from 'react-router-dom';
import { userAuth } from '../Context/authContext';
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
