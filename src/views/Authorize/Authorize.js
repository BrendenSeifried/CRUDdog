import React, { useState } from 'react';
import { signInUser } from '../../services/fetchauth';

export default function Authorize() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      const data = await signInUser({ email, password });
    } catch {
      setError('You broke it!');
    }
  };

  return (
    <div>Authorize
      <h1>Sign into account</h1>
      {error && <p>{error}</p>}
      <div>
        <label>Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          
        </label>
        <button>Submit</button>

      </div>


    </div>
  );
}
