import React, { useState } from 'react';
import AddDog from '../../components/AddDog';

export default function Admin() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  return (
    <div>
      <AddDog {...{ name, age, setName, setAge }}/>
    </div>
  );
}
