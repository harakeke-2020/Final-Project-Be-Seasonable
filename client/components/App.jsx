import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header}/>
    </Router>
  )
}

export default App
