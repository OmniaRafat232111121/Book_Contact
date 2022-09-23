import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar bg-dark navbar-dark'>
    <Link to={"/"} className="navbar-brand ">
    React Redux Contact Book
    </Link>
    </nav>
  )
}

export default Navbar
