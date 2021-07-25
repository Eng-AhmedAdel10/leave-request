import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlopalContext } from '../context'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { sidebar, handleSidebar } = useGlopalContext()
  return (
    <aside className={sidebar ? 'show-sidebar' : ''}>
      <header>
        <h2 className='logo'>
          <Link to='/'>
            civilsoft <span>hcms</span>
          </Link>
        </h2>
      </header>
      <span className='close-sidebar' onClick={handleSidebar}>
        <FaTimes />
      </span>
      <ul>
        <li onClick={handleSidebar}>
          <Link to='/'>post leave request</Link>
        </li>
        <li onClick={handleSidebar}>
          <Link to='/manage'>manage leave request</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
