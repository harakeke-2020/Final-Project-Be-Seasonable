import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

const date = new Date()
const month = date.getMonth() + 1
class FoodList extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     currentMonth: props.month
  //   }
  // }

  // componentDidUpdate (preProps) {
  //   if (this.props.month !== preProps.month) {
  //     this.setState({ currentMonth: this.props.month })
  //   }
  // }

  componentDidMount () {
    const { getInSeasonFoods } = this.props
    getInSeasonFoods(this.props.month)
  }

  // clickHandleLast () {
  //   const lastMonth = month => {
  //     if (month === 1) {
  //       return 1npm 2
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
    foods: state.foodList || [],
    month: state.month || month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (m) => { dispatch(getInSeasonFoods(m)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
