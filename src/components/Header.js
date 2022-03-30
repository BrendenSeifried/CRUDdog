// // import React from 'react';
// // import { NavLink } from 'react-router-dom';



// export default function Header({ currentUser, setCurrentUser }) {
//   const handleLogout = async () => {
//     await logout();
//     setCurrentUser('');
//   };

//   return (
//     <div>
//       {!currentUser && 
//         <div onClick={handleLogout}>
//           <button>logout</button>
            
//         </div>
        
//       }
//       {/* <NavLink className='nav' exact to = '/'>
//         <h1>See all dogs</h1>
//       </NavLink> */}

    
//     </div>
//   );
// }

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { logout } from '../services/fetchauth';



export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div className='navlinkdiv'>
      {!currentUser && 
        <div className='nav' onClick={handleLogout}>
          <button>logout</button>
            
        </div>
      }
        

      <NavLink className='nav' exact to = '/'>
        <h1>See all dogs</h1>
      </NavLink>

      <NavLink className='nav' exact to = '/dogs/new'>
        <h1>Admin Page</h1>
      </NavLink>

     
      
    </div>
  );
}