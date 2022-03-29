import React, { useEffect, useState } from 'react';
import { fetchSingleDog } from '../../services/fetchdogs';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DogDetail.css';

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

  if (!dogData) return <h1>...Walking Doggos</h1>;

  return (
    <div div className='test'>
      <div className='container'>
        <div key={dogData.id}>
        
          <img src={dogData.image}/>

          {/* //////Trying to get css to work properly /////*/}
          {/* <div className='details' style={{ border: 'solid', bordercolor: 'black', backgroundColor: 'brown', width:'fit-content' }}> */}
          {/* //////Trying to get css to work properly /////*/}

          <h2>{dogData.name}</h2>
          <h3>Age: ({dogData.age}) Breed: {dogData.breed}</h3>
          {/* <h3>{dogData.breed}</h3> */}
          <p>{dogData.bio}</p>
          <Link to={`/`}>
            <h1> Adopt another Dog! </h1>
          </Link>
        </div>


      </div>
    </div>
  );
}
