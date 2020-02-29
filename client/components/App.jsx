import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import FoodList from './FoodList'
import ErrorComponent from './Error'
import Waiting from './Waiting'

const App = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  return (
    <Router>
      <Route path='/' component={Header}/>
      <Route path='/'>
        <FoodList month={month}/>
      </Route>
      <Route path='/' component={ErrorComponent} />
      <Route path='/' component={Waiting} />
      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App
