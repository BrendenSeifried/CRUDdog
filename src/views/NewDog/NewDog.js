import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddDog from '../../components/AddDog';
import { useLoginContext } from '../../context/LoginContext';
import { createDog } from '../../services/fetchdogs';

import './NewDog.css';

export default function Admin() {
  const { error, setError, name, setName, breed, setBreed, age, setAge, bio, setBio, image, setImage } = useLoginContext();


  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, setBio] = useState('');
  // const [breed, setBreed] = useState('');
  // const [image, setImage] = useState('');
  // const [error, setError] = useState('');
  const history = useHistory();



  const submitDog = async () => {
    try {
      await createDog({ name, age, bio, breed, image });
      alert('Dog profile uploaded successfully!');
      history.push('/');/////GOES INTO DELETE
      
    } catch (e) {
      setError('Oh no! Something .');
    }
  };


  return (
    <div>
      {error && <p>{error}</p>}
      <Link exact to = '/'>
        <button className='goback'>Go Back</button>
      </Link>
      <AddDog {...{ name, age, setName, setAge, bio, setBio, breed, setBreed, image, setImage, submitDog }}/>

    </div>
  );
}
