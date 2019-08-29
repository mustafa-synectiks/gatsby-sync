import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/page-2">About</Link>
      </li>
      <li>
        <Link to="/services/services">Services</Link>
      </li>
      <li>
        <Link to="/transformation/about">Transformation</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
