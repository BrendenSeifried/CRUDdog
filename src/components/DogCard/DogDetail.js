import React, { useEffect, useState } from 'react';
import { fetchSingleDog } from '../../services/fetchdogs';
import { useParams } from 'react-router-dom';

export default function DogDetail() {
  const params = useParams();
  const id = params.id;
  const [dogData, setDogData] = useState([]);


  useEffect(() => {
    const fetchDogData = async () => {
      const data = await fetchSingleDog(id);
      setDogData(data);
    };
    fetchDogData();
  }, [id]);

  if (!dogData) return <h1>...Feeding Doggos</h1>;

  return (
    <>
      <div key={dogData.id}>
        <img src={dogData.image}/>
        <h2>{dogData.name}</h2>
        <h3>{dogData.age}</h3>
        <h3>{dogData.breed}</h3>
        <p>{dogData.bio}</p>


      </div>

    </>
  );
}
