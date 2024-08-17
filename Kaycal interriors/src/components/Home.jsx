import React from 'react';
import { userAuth } from '../Context/authContext'; 

const Home = () => {
  const { user } = userAuth();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName || 'User'}!</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default Home;
