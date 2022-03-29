import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact to = '/'>
        <h1>Main Page</h1>
      </NavLink>

      <NavLink exact to = '/dogs/:id'>
        
      </NavLink>

    </div>
  );
}
