import React from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'

function Nav() {
  return (
        <section className='nav'>
        <div className='navBar'>
        
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://blog.queenbeandesigncafe.com">Blog</a>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <h2> WELCOME TO THE FUNNY FARM</h2>
        
        </section>
  )
}

export default Nav