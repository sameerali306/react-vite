import React from 'react'
import { Link } from 'react-router'

function Component() {
  return (
    <div>
       <nav className="bg-green-500 text-2xl text-white pt-4 mt-6 mx-4 flex items-center justify-between">
  <h1 className="text-6xl">Logo</h1>


  <ul className="flex items-center space-x-6">
  <li>
  <Link to="/" className="text-white hover:text-gray-200 cursor-pointer"><i className="fas fa-home mr-2"></i></Link>
</li>
    <li><Link to={"/about"} className="text-white hover:text-gray-200 cursor-pointer"><i className="fas fa-info-circle mr-2"></i> </Link></li>
    <li><Link to={"/contact"} className="text-white hover:text-gray-200 cursor-pointer"> <i className="fas fa-phone-alt mr-2"></i></Link></li>
    <li><Link to={"/video"} className="text-white hover:text-gray-200 cursor-pointer">  <i className="fas fa-video mr-2"></i></Link></li>
  </ul>
</nav>
  
      
    </div>
  )
}

export default Component
