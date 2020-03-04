import React from 'react'
import { Link } from 'react-router-dom'

function Menu (props) {
  return (
    <div data-testid={'menu'} className="menu">
      <Link onClick={props.onClickCurrent} to={'/'}>
        <span data-testid={'title'}>
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
      <Link to={'/subscribe'}>
        <p>Subscribe</p>
      </Link>
    </div>
  )
}

export default Menu
