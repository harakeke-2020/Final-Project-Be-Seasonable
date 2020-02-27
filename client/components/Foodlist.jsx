import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  componentDidMount () {
    const date = new Date()
    const month = date.getMonth() + 1
    const { getInSeasonFoods } = this.props

    console.log(getInSeasonFoods)
    getInSeasonFoods(month)
  }

  render () {
    return (
      <>
        <h1>Here are the foods in season now!</h1>
        {
          this.props.foods.map(food =>
            <FoodItem key={food.id} food={food}/>
          )
        }
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
