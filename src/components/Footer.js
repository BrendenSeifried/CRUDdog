import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='navlinkdiv'>

      <NavLink className='nav' exact to = '/'>
        <h1>See all dogs</h1>
      </NavLink>
      
    </div>
   
  );
}