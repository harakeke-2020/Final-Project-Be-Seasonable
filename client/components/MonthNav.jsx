import React from 'react'
import { connect } from 'react-redux'
import { getMonthName } from '../utils' 

const MonthNav = (props) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const onMonth = getMonthName(props.month)
  const currentMonth = getMonthName(month)
  return (
    <section className="month">
      <button onClick={props.onClickLast}><span>Last month</span></button>
      {
        currentMonth === onMonth &&
        <h3 data-testid={'default'}>{onMonth}</h3>
      }
      {
        currentMonth !== onMonth &&
        <span>
          <h3 data-testid={'viewing'}>{onMonth}</h3>
          <button data-testid={'currentMonthButton'}onClick={props.onClickCurrent}><span>Back to {currentMonth}</span></button>
        </span>
      }
      <button onClick={props.onClickNext}><span>Next month</span></button>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    month: state.month
  }
}
export default connect(mapStateToProps)(MonthNav)
