import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  componentDidMount () {
    const { getInSeasonFoods } = this.props
    const date = new Date()
    const month = date.getMonth()
    console.log(month)

    getInSeasonFoods(month)
  }

  render () {
    const { foods } = this.props

    return (
      <>
        <h1>Here are the foods in season now!</h1>
        {
          foods.map(food =>
            <FoodItem key={food.id} food={food}/>
          )
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    foods: FoodList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (month) => { dispatch(getInSeasonFoods(month)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
