import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import FoodList from './FoodList'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header}/>
      <Route path='/' component={FoodList}/>
      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App
