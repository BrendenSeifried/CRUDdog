import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddDog from '../../components/AddDog';
import { useLoginContext } from '../../context/LoginContext';
import { createDog } from '../../services/fetchdogs';

import './NewDog.css';

export default function Admin() {
  const { error, setError, name, breed, age, bio, image } = useLoginContext();


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
      <AddDog {...{ submitDog }}/>

    </div>
  );
}
