import React, { useState } from 'react';
import AddDog from '../../components/AddDog';

export default function Admin() {
  const [name, setName] = useState('');

  return (
    <div>
      <AddDog name={ name } setName={setName}/>
    </div>
  );
}
