import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/fetchauth';



export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

  return (
    <div>
      {!currentUser && 
        <div onClick={handleLogout}>
          <button>logout</button>
            
        </div>
        
      }
      {/* <NavLink className='nav' exact to = '/'>
        <h1>See all dogs</h1>
      </NavLink> */}

    
    </div>
  );
}