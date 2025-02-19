// src/components/About.js
import { Link } from "react-router";
import React from "react";

const About = () => {
  return (
    
     <Link to={"/about"}> <h1>About Page</h1>
     <p>Learn more about us on this page.</p></Link>
  );
};

export default About;

