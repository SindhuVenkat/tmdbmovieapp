import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='bg-[#1c4587] w-100 h-16 flex  text-white text-xl'>
        <img src={logo} alt="logo" className='w-100' />
        <Link  className= 'px-4 py-4' to="/">Home</Link>
        <Link className= 'px-4 py-4' to='/Watch'>Watchlist</Link>
    </div>
  )
}

export default Navbar