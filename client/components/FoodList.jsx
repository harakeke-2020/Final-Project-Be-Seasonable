import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMonth: props.month
    }
  }

  componentDidUpdate (preProps) {
    if (this.props.month !== preProps.month) {
      this.setState({ currentMonth: this.props.month })
    }
  }

  componentDidMount () {
    console.log(this.state.currentMonth)
    const { getInSeasonFoods } = this.props
    getInSeasonFoods(this.state.currentMonth)
  }

  // clickHandleLast () {
  //   const lastMonth = month => {
  //     if (month === 1) {
  //       return 12
  //     } else {
  //       return month - 1
  //     }
  //   }

  //   const lastMonthNumber = lastMonth(this.state.currentMonth)

  //   console.log(lastMonthNumber)
  // getInSeasonFoods(lastMonthNumber)

  // this.setState({
  //   currentMonth: lastMonthNumber
  // })
  // }

  // clickHandleNext () {
  // const { getInSeasonFoods } = this.props
  // const nextMonth = month => {
  //   if (month === 12) {
  //     return 1
  //   } else {
  //     return month + 1
  //   }
  // }

  // const nextMonthNumber = nextMonth(this.month)
  // getInSeasonFoods(nextMonthNumber)
  // this.setState({
  //   currentMonth: nextMonthNumber
  // })
  // }

  render () {
    return (
      <>
        <div>
          <button onClick={this.clickHandleLast}>last month</button>
          <h2>{this.month}</h2>
          <button onClick={this.clickHandleNext}>next month</button>
        </div>
        <div className="container">
          <main>
            {
              this.props.foods.map((food, index) => {
                return <FoodItem key={food.id} index={index} food={food}/>
              }
              )
            }
          </main>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foodList || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (m) => { dispatch(getInSeasonFoods(m)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
