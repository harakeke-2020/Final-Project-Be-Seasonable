import React from 'react'
import { connect } from 'react-redux'

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

const getMonthName = (month) => {
  switch (month) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
  }
}

const mapStateToProps = state => {
  return {
    month: state.month
  }
}
export default connect(mapStateToProps)(MonthNav)
