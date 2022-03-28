import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`/dogs/${data.id}`}>
            <img src={data.image}/>
          </Link>
          {data.name}

          

        </div>
      ))}


    </div>
  );
}