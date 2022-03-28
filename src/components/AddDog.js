import React, { useState } from 'react';
import { createDog } from '../services/fetchdogs';

export default function AddDog({ name, setName, age, setAge, bio, setBio, breed, setBreed, image, setImage }) {
  
  const [error, setError] = useState('');
  const submitDog = async () => {
    try {
      const submit = await createDog({ name, age, bio, breed, image });
      console.log(submit);
    } catch (e) {
      setError('Oh no!');
    }
    setName('');
    setAge(0);
    setBio('');
    setBreed('');
    setImage('');
    
  };

  return (
    <div>
      {error && <p>{error}</p>}


      <label> Link a Photo:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
      </label>

      <label> Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label> Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
      </label>

      <label> Background:
        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
      </label>

      <label> Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
      </label>

      <button onClick={submitDog}>submit</button>
      
    </div>
  );
}
