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
    return (
      <main>
        <h2 data-testid={'foodlistheading'}>Here are the foods in season now!</h2>
        <section>
          {
            this.props.foods.map(food => {
              return <FoodItem key={food.id} food={food}/>
            })
          }
        </section>
      </main>
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
