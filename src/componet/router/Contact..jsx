// src/components/Contact.js
import { Link } from "react-router";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Link to={"/Contact"}><h1>Contact Page</h1>
      <p>Feel free to reach out through this page.</p></Link>
    </div>
  );
};

export default Contact;
