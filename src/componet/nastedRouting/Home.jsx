import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <Link to="/" className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-semibold text-indigo-600">Home Page</h1>
  
      <input
        type="text"
        placeholder="Enter Your Username"
        className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
  
      <input
        type="password"
        placeholder="Enter Your Password"
        className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
  
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </Link>
  </div>
  

  )
}

export default Home
