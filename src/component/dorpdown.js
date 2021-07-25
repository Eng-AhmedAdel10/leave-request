import React from 'react'
import { FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useGlopalContext } from '../context'
import { Link } from 'react-router-dom'

const Dorpdown = () => {
  const { dropdown } = useGlopalContext()

  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      <li>
        <Link to='/'>
          <FaUser className='icon' />
          profile
        </Link>
      </li>
      <li>
        <Link to='/'>
          <FaSignOutAlt className='icon' />
          logout
        </Link>
      </li>
    </ul>
  )
}

export default Dorpdown
