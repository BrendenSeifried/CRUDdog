import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

import { fetchDogs } from '../../services/fetchdogs';

export default function Home() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchDoggosFunct = async () => {
      const data = await fetchDogs();
      setDog(data);
      setLoading(false);
    };
    fetchDoggosFunct();
  }, []);

  if (loading) return <h1>Letting dogs out...</h1>;

  return (
    <div className='doggo'>
      {dog.map((data) => (
        <div className='dogpic' key={data.id}>
          <Link to={`/dogs/${data.id}`}>
            <img src={data.image} />
            <div className='dogname'>
              {data.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}