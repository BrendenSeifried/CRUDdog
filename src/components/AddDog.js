import React from 'react';

export default function AddDog(name, setName, bio, setBio, age, setAge, breed, setBreed) {
  return (
    <div>
        
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    
  );
}
