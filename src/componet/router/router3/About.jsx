import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div>
      <Link to={"/about"}>
      <h1>About Page ...!</h1>
      <p>WE wellcome you to our About page of website</p>
      
      </Link>
    </div>
  )
}

export default About
