import React, { useState } from 'react';
import AddDog from '../../components/AddDog';

export default function Admin() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');

  return (
    <div>
      <AddDog {...{ name, age, setName, setAge, bio, setBio, breed, setBreed, image, setImage }}/>
    </div>
  );
}
