import React from 'react'
import { FaBars, FaBell, FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { useGlopalContext } from '../context'
import Dorpdown from './dorpdown'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { handleSidebar, handleDropdown, dropdown } = useGlopalContext()

  return (
    <nav>
      <div className='container nav-center'>
        <Dorpdown />
        <div className='nav-content'>
          <FaBars className='nav-icon' onClick={handleSidebar} />
          <h2 className='logo'>
            <Link to='/'>
              civilsoft <span>hcms</span>
            </Link>
          </h2>
        </div>
        <div className='nav-content'>
          <FaBell className='nav-icon' />
          <img src='images/profile.jpg' alt='profile' />
          <div className='name'>ahmed</div>
          {dropdown ? (
            <FaCaretUp className='drop-icon' onClick={handleDropdown} />
          ) : (
            <FaCaretDown className='drop-icon' onClick={handleDropdown} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
