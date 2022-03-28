import React, { useEffect, useState } from 'react';

import { fetchDogs } from '../../services/fetchdogs';

export default function Home() {
  const [dog, setDog] = useState([]);

  useEffect(()=> {
    const fetchDoggosFunct = async () => {
      const data = await fetchDogs();
      setDog(data);
    };
    fetchDoggosFunct();
  }, []);

  return (
    <div>Home

      {dog.map((data) => (
        <div key={data.id}>
          {data.name}
          Age: ({data.age})
         Breed: ({data.breed})
         Bio: {data.bio}

        </div>
      ))}


    </div>
  );
}
