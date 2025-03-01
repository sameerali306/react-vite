import React from 'react'
import { Route, Router } from 'react-router'
import { Link,Outlet } from "react-router";

function Hello() {
  return (
    <div>
     <nav className='flex justify-between items-center bg-blue-300 p-4'>
  <h1 className='text-2xl font-bold'>Logo</h1>
  <ul className='flex space-x-6'>
    <li className='hover:text-white'><Link to="/">Home</Link></li>
    <li className='hover:text-white'><Link to="/about">About</Link></li>
    <li className='hover:text-white'><Link to="/contact">Contact</Link></li>
  </ul>
</nav>

     
    </div>
  )
}

export default Hello
