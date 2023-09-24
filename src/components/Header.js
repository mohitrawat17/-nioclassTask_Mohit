import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <div className="flex justify-between px-4 pl-0 items-center shadow-xl bg-white">
    <Link to='/'>
                  <img
                  alt="logo"
                      className="cursor-pointer w-20"
                      src={logo}
                  />
                  
                  </Link>
                  <h2 className='text-xl font-semibold text-blue-600'>Welcome to Neoclass</h2>
                  <Link to='/' className='border px-2 py-1 rounded-md bg-violet-900 text-white'>
                  Exit
                  </Link>
              </div>
  )
}

export default Header
