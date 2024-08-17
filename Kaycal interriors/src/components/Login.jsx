import React from 'react';

import { userAuth } from '../Context/authContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';
const Login = () => {
  const auth = userAuth();
  console.log('userAuth() returned:', auth); 

  const { login } = auth || {};

  if (!login) {
    return <div>Error: Login function is not available</div>;
  }

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
