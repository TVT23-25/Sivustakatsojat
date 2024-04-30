import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';

function SignIn() {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/SignIn', { email, pw });
      console.log(response.data);
    } catch (error) {
      console.error('error signing in', error.response.data);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={pw} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;