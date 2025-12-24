import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Hello! You are in Home Page.</h2>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
