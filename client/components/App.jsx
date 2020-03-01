import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getNextMonth,
  getLastMonth,
  getCurrentMonth
} from '../actions/monthAction'

import Header from './Header'
import Footer from './Footer'
import FoodList from './FoodList'
import ErrorComponent from './Error'
import Waiting from './Waiting'
import About from './About'
import Menu from './Menu'
import MonthNav from './MonthNav'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      month: props.month
    }
  }

  componentDidUpdate (preProps) {
    if (preProps.month !== this.props.month) {
      this.setState({
        month: this.props.month
      })
    }
  }

  onClickLast = () => {
    this.props.dispatch(getLastMonth(this.state.month))
  }

  onClickNext = () => {
    this.props.dispatch(getNextMonth(this.state.month))
  }

  onClickCurrent = () => {
    this.props.dispatch(getCurrentMonth())
  }

  date = new Date()
  month = this.date.getMonth() + 1

  render () {
    return (
      <Router>
        <Route path='/' component={Menu} />
        <Route path='/' component={Header}/>
        <Route path='/about' component={About}/>
        <Route exact path='/'>
          <MonthNav onClickLast={this.onClickLast} onClickNext={this.onClickNext} onClickCurrent={this.onClickCurrent}/>
        </Route>
        <Route exact path='/'>
          <FoodList/>
        </Route>
        <Route path='/' component={ErrorComponent} />
        <Route path='/' component={Waiting} />
        <Route path='/' component={Footer}/>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    month: state.month
  }
}

export default connect(mapStateToProps)(App)
