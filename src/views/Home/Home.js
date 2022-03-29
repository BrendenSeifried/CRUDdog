import React from 'react';
import { Link } from 'react-router-dom';
import DogList from '../DogCard/DogList';
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className='newdog'>
        <h3 >Have a friend looking for forever home?</h3> 
        <Link exact to = '/dogs/new'>
          <h3 className='newdoglink'> Click Here!</h3>
        </Link>
      </div>
      <h1>Take a look at our wonderful dogs! Click any picture to view more info.</h1>
      <DogList />
    </div>
  );
}
