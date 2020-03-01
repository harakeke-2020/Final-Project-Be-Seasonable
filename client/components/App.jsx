import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import FoodList from './FoodList'
import ErrorComponent from './Error'
import Waiting from './Waiting'
import FoodDetail from './FoodDetail'
import About from './About'
import Menu from './Menu'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Menu} />
      <Route exact path='/' component={Header}/>
      <Route exact path='/' component={FoodList}/>
      <Route path='/food/:id' component={FoodDetail}/>
      <Route path='/about' component={About}/>
      <Route path='/' component={ErrorComponent} />
      <Route path='/' component={Waiting} />
      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App
