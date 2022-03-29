import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

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
    <div className='doggo'>
      {dog.map((data) => (
        <div className='dogpic' key={data.id}>
          <Link to={`/dogs/${data.id}`}>
            <img src={data.image} />
          </Link>

          <div className='dogname'>
            {data.name}
          </div>

        </div>
      ))}
    </div>
  );
}