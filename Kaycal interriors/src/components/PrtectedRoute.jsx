import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../'

function ProtectedRoute({ children }) {
  const { userLoggedIn } = useContext(AuthContext);

  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
