import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <div className="flex justify-between px-4 pl-0 items-center shadow-xl bg-white">
    <Link to='/'>
                  <img
                  alt="logo"
                      className="cursor-pointer w-20 max-sm:w-14"
                      src={logo}
                  />
                  
                  </Link>
                  <h2 className='text-xl max-sm:text-lg font-semibold text-blue-600'>Welcome to Neoclass</h2>
                  <Link to='/' className='max-sm:px-[6px] max-sm:py-[2px] border px-2 py-1 rounded-md bg-blue-600 text-white'>
                  Exit
                  </Link>
              </div>
  )
}

export default Header
