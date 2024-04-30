import React, { useState } from 'react';  
import axios from 'axios';
import SignIn from './SignIn';
import DeleteAcccount from '../DeleteAccount';


function SignUp() {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/SignUp', { email, pw, fname, lname, username });
      console.log('Sign up successful:', response.data);
      
      
    } catch (error) {
      console.error('Error signing up:', error);
    }
      

    };
    


  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={pw} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="fname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" />
        <input type="Lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" />
        <input type="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <button type="submit">Sign Up</button>
      </form>
      
      <SignIn />
      <DeleteAcccount />
    </div>
  );
}

export default SignUp;