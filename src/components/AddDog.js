import React, { useState } from 'react';
import { createDog } from '../services/fetchdogs';
import './AddDog.css';

export default function AddDog({ name, setName, age, setAge, bio, setBio, breed, setBreed, image, setImage }) {
  
  const [error, setError] = useState('');
  const submitDog = async () => {
    try {
      await createDog({ name, age, bio, breed, image });
      alert('Dog profile uploaded successfully!');
      history.push('/');
      
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
    <div className='all'>
      {error && <p>{error}</p>}
      <div className='divphoto'>
        <label className='photo'> Link a Photo:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label>
      </div>

      <div className='divinfo'>
        <label className='info'> Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label className='info'> Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        </label>

        <label className='info'> Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>

      </div>

      <div className='divbio'>
        <textbox className='bio'> Background:
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </textbox>
      </div>

      

      <button className='addbtn' onClick={submitDog}>Send out for Adoption.</button>
      
    </div>
  );
}
