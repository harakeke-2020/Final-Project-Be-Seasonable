import React from 'react'
import { connect } from 'react-redux'

const MonthNav = (props) => {
  return (
    <div>
      <button>last month</button>
      <h2>{props.month}</h2>
      <button>next month</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    month: state.month
  }
}

export default connect(mapStateToProps)(MonthNav)
