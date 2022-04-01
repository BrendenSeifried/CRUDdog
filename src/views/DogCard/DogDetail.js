import React, { useEffect, useState } from 'react';
import { deleteDog, fetchSingleDog } from '../../services/fetchdogs';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DogDetail.css';

export default function DogDetail({ currentUser }) {
  const params = useParams();
  const id = params.id;
  const [dogData, setDogData] = useState([]);
  const history = useHistory('');
  const [loading, setLoading] = useState(true);
  
 

  useEffect(() => {
    const fetchDogData = async () => {
      const data = await fetchSingleDog(id);
      setDogData(data);
      setLoading(false);
    };
    
    fetchDogData();
  }, [id]);

  const removeDog = async () => {
    await deleteDog(id); 
    history.push(`/`);
  };

  if (loading) return <h1>...Walking Doggos</h1> ;

  return (
    <div className='test'>
      {currentUser && (
        <>
          <Link exact to = {`/dogs/${dogData.id}/edit`}>
            <button className='Edit'>Edit info</button>
          </Link>
          <button onClick={removeDog}>Delete</button>
        </>
      )}
      <div className='container'>
        <div key={dogData.id}>   
          <img src={dogData.image}/>
          <h2>{dogData.name}</h2>
          <h3>Age: ({dogData.age}) Breed: {dogData.breed}</h3>
          <p>{dogData.bio}</p>
          <Link to={`/`}>
            <h1> Adopt another Dog! </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
