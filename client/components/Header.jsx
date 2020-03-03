import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
      </div>
      <div data-aos="fade-left">
        <h3><img className="logo" src="/logo.PNG"/> Be Seasonable</h3>
        <h1 data-testid={'header'}>Shop seasonal</h1>
        <h2>Save money, save the planet</h2>
      </div>
      <h3 data-aos="fade-right" data-testid={'foodlistheading'}>See what&apos;s in season</h3>
    </header>
  )
}

export default Header
