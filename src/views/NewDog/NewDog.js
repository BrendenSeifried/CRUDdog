import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddDog from '../../components/AddDog';
import './NewDog.css';

export default function Admin() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');

  return (
    <div>
      <Link exact to = '/'>
        <button className='goback'>Go Back</button>
      </Link>
      <AddDog {...{ name, age, setName, setAge, bio, setBio, breed, setBreed, image, setImage }}/>
    </div>
  );
}
