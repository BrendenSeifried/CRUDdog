import React from 'react';
import { Link } from 'react-router-dom';
import DogList from '../DogCard/DogList';
import './Home.css';

export default function Home({ currentUser }) {
  return (
    <div>
      <div className='newdog'>
        {currentUser &&
        <>
          <h3 >Have a friend looking for forever home?</h3> 
          <Link exact to = '/dogs/new'>
            <h3 className='newdoglink'> Click Here!</h3>
          </Link>
        </>
        }
      </div>

      <div className='newdog'>
        {!currentUser &&
        <>
          <h3 >It seems you are not logged in</h3> 
          <Link exact to = '/auth'>
            <h3 className='newdoglink'> Please sign in.</h3>
          </Link>
        </>
        }
      </div>



      <div>
        <h1>Take a look at our wonderful dogs! Click any picture to view more info.</h1>
      </div>
      <DogList />
      
    </div>
  );
}
