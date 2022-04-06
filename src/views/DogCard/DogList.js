import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

import { fetchDogs } from '../../services/fetchdogs';
// import { useDogContext } from '../../context/Edit_NewContext';
// import { useLoginContext } from '../../context/LoginContext';

export default function Home() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);


  // const { loading, setLoading } = useLoginContext();
  // Why doesnt setloaidng or any set state work in a useEffect?/////////////////////////////////


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