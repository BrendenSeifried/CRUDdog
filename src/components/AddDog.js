import React, { useState } from 'react';
import { createDog } from '../services/fetchdogs';

export default function AddDog({ name, setName }) {
  const [error, setError] = useState('');
  const submitDog = async () => {
    try {
      const submit = await createDog({ name });
      console.log(submit);
    } catch (e) {
      setError('Oh no!');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={submitDog}>submit</button>
    </div>
  );
}
