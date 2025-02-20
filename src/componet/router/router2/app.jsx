import { BrowserRouter , Route, Link, Routes } from "react-router";
import Home from './componet/router/Home';
import About from './componet/router/About';
import Contact from './componet/router/Contact.';
import React from 'react'
import CardComponent from "./componet/router";


function App() {
  return (
    <div>
      
      
      <CardComponent/>
   <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/Contact' element={<Contact/>}/>


       </Routes>
  
    </div>
  )
}

export default App
