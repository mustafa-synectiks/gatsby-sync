import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tranformation">Transformation</Link>
        </li>
        <li>
          <Link to="/cloud">Cloud</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/ ">Company</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
