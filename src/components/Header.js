import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { logout } from '../services/fetchauth';
import { useLoginContext } from '../context/LoginContext';



export default function Header() {
  const { currentUser, setCurrentUser } = useLoginContext();
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div className='navlinkdiv'>
      
        

      <NavLink className='nav' exact to = '/'>
        <h1>See all dogs</h1>
      </NavLink>

      

      {currentUser && 
      <>
        <NavLink className='nav' exact to = '/dogs/new'>
          <h1>Admin Page</h1>
        </NavLink>
    
        <div className='nav' onClick={handleLogout}>
          <button className='navbtn'>logout</button>
        </div>
      </>
      }
      
    </div>
  );
}