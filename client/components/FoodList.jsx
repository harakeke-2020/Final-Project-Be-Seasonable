import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  date = new Date()
  month = this.date.getMonth() + 1

  componentDidMount () {
    var { getInSeasonFoods } = this.props

    getInSeasonFoods(this.month)
  }

  render () {
    return (
      <>
        <div>
          <button>last month</button>
          <button>next month</button>
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
    getInSeasonFoods: (month) => { dispatch(getInSeasonFoods(month)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
