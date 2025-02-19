// src/components/Home.js
import { Link } from "react-router";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link to={"/"}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      </Link>
     
    </div>
  );
};

export default Home;


