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
        <input type="email" className='input-border' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className='input-border' value={pw} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="fname" className='input-border' value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" />
        <input type="Lname" className='input-border' value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" />
        <input type="Username" className='input-border' alue={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <button type="submit" className='button-color'>Sign Up</button>
      </form>
      
      <SignIn />
      <DeleteAcccount />
    </div>
  );
}

export default SignUp;