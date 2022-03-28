import React, { useState } from 'react';
import { createDog } from '../services/fetchdogs';

export default function AddDog({ name, setName, age, setAge }) {
  const [error, setError] = useState('');
  const submitDog = async () => {
    try {
      const submit = await createDog({ name, age });
      console.log(submit);
    } catch (e) {
      setError('Oh no!');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
      <button onClick={submitDog}>submit</button>
    </div>
  );
}
