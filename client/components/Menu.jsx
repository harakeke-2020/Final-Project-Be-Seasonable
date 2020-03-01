import React from 'react'
import { Link } from 'react-router-dom'

function Menu () {
  return (
    <div className="menu">
      <Link to={'/'}>
        <span>
          <p>🍅</p>
          <p>Be Seasonable</p>
          <p>Home</p>
        </span>
      </Link>
      <Link to={'/about'}>
        <span>
          <p>About</p>
        </span>
      </Link>
    </div>
  )
}

export default Menu
