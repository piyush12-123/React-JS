import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='nav'>
      <h3>Progress Piyush</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default NavBar
