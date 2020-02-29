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
      <div className="container">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#10472a" points="0,100 100,0 0,0"/>
        </svg> */}
        <main>
          {
            this.props.foods.map((food, index) => {
              return <FoodItem key={food.id} index={index} food={food}/>
            }
            )
          }
        </main>
      </div>
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
