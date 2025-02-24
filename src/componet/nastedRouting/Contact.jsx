import React from 'react'
import { Link } from 'react-router'

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
       <Link to={"/contact"}><h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">Contact Us</h1>

{/* Contact Information Section */}
<div className="mb-8">
  <h2 className="text-2xl font-semibold text-gray-700">Our Address</h2>
  <p className="text-lg text-gray-600 mb-4">
    123 Business St, Suite 100, Cityville, Country 12345
  </p>
  
  <h2 className="text-2xl font-semibold text-gray-700">Phone</h2>
  <p className="text-lg text-gray-600 mb-4">
    (123) 456-7890
  </p>
  
  <h2 className="text-2xl font-semibold text-gray-700">Email</h2>
  <p className="text-lg text-gray-600 mb-4">
    contact@yourcompany.com
  </p>

  <h2 className="text-2xl font-semibold text-gray-700">Social Media</h2>
  <div className="flex space-x-4">
    <Link to="#" className="text-indigo-600 hover:text-indigo-800">Facebook</Link>
    <Link to="#" className="text-indigo-600 hover:text-indigo-800">Twitter</Link>
    <Link to="#" className="text-indigo-600 hover:text-indigo-800">Instagram</Link>
  </div>
</div>

{/* Contact Form Section */}
<form className="space-y-4">
  <h2 className="text-2xl font-semibold text-gray-700">Send Us a Message</h2>
  
  <div className="flex space-x-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  <div className="flex space-x-4">
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  <div className="flex space-x-4">
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full p-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Send Message
  </button>
</form></Link>
      
    </div>
  )
}

export default Contact
