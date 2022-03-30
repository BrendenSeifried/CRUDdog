import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
  return (
    <div className='navlinkdiv'>

      <NavLink className='nav' exact to = '/'>
        <h1>See all dogs</h1>
      </NavLink>

      <NavLink className='nav' exact to = '/dogs/new'>
        <h1>Admin Page</h1>
      </NavLink>
      
    </div>
  );
}