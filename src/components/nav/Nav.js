import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
        <section className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">Blog</a>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
        </section>
  )
}

export default Nav