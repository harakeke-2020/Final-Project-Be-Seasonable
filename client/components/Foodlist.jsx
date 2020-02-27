import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  componentDidMount () {
    const { getInSeasonFoods } = this.props
    const date = new Date()
    const month = date.getMonth() + 1

    getInSeasonFoods(month)
  }

  render () {
    console.log(this.props.foods)
    return (
      <>
        <h1>Here are the foods in season now!</h1>
        {
          this.props.foods.map(food => {
            console.log(food)
            return <FoodItem key={food.id} food={food}/>
          }
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
