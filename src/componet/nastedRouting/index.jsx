import React from 'react'
import { Link } from 'react-router'

function Card() {
  return (
    <div className="flex justify-between items-center bg-blue-300 p-4 shadow-md">
    <h1 className="text-3xl font-semibold text-white">Nested Routing</h1>
    <ul className="flex space-x-8">
      <li  className="text-lg text-white hover:text-blue-800 cursor-pointer transition duration-300"><Link to="/">Home</Link></li>
      <li className="text-lg text-white hover:text-blue-800 cursor-pointer transition duration-300"><Link to={"/about"}>About</Link></li>
      <li className="text-lg text-white hover:text-blue-800 cursor-pointer transition duration-300"><Link to={"/contact"}>Contact</Link></li>
    </ul>
  </div>
  )
}

export default Card
