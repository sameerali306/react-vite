import React from 'react'
import { Outlet } from 'react-router';
function Home() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
  <h1 className='text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-500'>
    Welcome to Our Home Page
  </h1>
  <p className='text-lg text-gray-600 leading-relaxed hover:text-gray-800'>
    Discover the latest updates and explore the services we offer. Our team is committed to delivering top-notch solutions for your needs. Join us in this journey and let’s achieve great things together.
  </p>
  <div className='mt-6'>
    <a 
      href='/inner' 
      className='inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors'
    >
      Learn More About Us
    </a>
    <Outlet  path="/inner" element={<Home/>}/>
  </div>
</div>

  
  )
}

export default Home
