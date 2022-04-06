import React, { useEffect, useState } from 'react';
import { deleteDog, fetchSingleDog } from '../../services/fetchdogs';
// import { useParams, useHistory } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DogDetail.css';
// import { useLoginContext } from '../../context/LoginContext';

export default function DogDetail() {
  const params = useParams();
  const id = params.id;
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory('');

  // const { currentUser, loading, setLoading } = useLoginContext();
  // Why doesnt setloaidng or any set state work in a useEffect?
  
 

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
