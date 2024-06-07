// MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
  return (
    <div className='menuBar'>
      <Link className='linkTag' to="/">Home</Link> 
      <Link className='linkTag' to="/company">Company Info</Link>
      <Link className='linkTag' to="/movie">Movie-List</Link>
      <Link className='linkTag' to="/signIn">Sign up</Link>
    </div>
  );
};

