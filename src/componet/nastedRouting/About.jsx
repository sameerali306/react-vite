import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
    <Link to="/about" className="block text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">You're Welcome to the About Page</h1>
      <p className="text-lg text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam expedita iure amet est
        numquam assumenda eius? Ipsa, nam dolorum?
      </p>
    </Link>
  </div>
  
  )
}

export default About
