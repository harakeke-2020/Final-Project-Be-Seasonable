import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import FoodList from './FoodList'
import ErrorComponent from './Error'
import Waiting from './Waiting'
import FoodDetail from './FoodDetail'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Header}/>
      <Route exact path='/' component={FoodList}/>
      <Route path='/food/:id' component={FoodDetail}/>
      <Route path='/' component={ErrorComponent} />
      <Route path='/' component={Waiting} />
      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App
