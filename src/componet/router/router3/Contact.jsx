import React from 'react'
import { Link } from 'react-router'

function Contact() {
  return (
    <div>
      <Link to={"/contact"}>
      <h1>Contact page ...!</h1>
      <p>You are wellcome to our contact page</p>
      </Link>
    </div>
  )
}

export default Contact
