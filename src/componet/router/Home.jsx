// src/components/Home.js
import { Link,Outlet } from "react-router";
import React from "react";

const Home = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
    <h1 className='text-3xl font-semibold text-gray-800 mb-4'>I am Home page</h1>
    <p className='text-lg text-gray-600 leading-relaxed'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea?
    </p>
  </div>
  
  );
};

export default Home;


