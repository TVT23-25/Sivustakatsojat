import React, { useState } from 'react';
import axios from 'axios';

function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, pw }; 
      const response = await axios.delete('http://localhost:3001/DeleteAccount', { data: userData });
      if (response && response.data) {
        console.log(response.data);
      } else {
        console.error('Empty response');
      }
    } catch (error) {
      console.error('Error deleting account:', error.response.data);
    }
  };
  

  return (
    <div>
      <h2>DeleteAccount</h2>
      <form onSubmit={handleDeleteAccount}>
        <input type="email" className='input-border' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className='input-border' value={pw} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit"className='button-color'>DeleteAccount</button>
      </form>
    </div>
  );
}

export default DeleteAccount;