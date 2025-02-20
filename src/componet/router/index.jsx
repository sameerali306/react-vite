import React from 'react';
import { Link } from 'react-router'

function CardComponent() {
  return (
    <div className='app'>
   
      <nav>
        <h1><Link to={"/"}>Logo</Link></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CardComponent;

