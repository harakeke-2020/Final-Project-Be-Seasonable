import React from 'react'
import { connect } from 'react-redux'

import FoodItem from './FoodItem'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'

class FoodList extends React.Component {
  componentDidMount () {
    const { getInSeasonFoods } = this.props
    getInSeasonFoods(this.props.month)
  }

  componentDidUpdate (preProps) {
    const { getInSeasonFoods } = this.props
    if (this.props.month !== preProps.month) {
      getInSeasonFoods(this.props.month)
    }
  }

  render () {
    return (
      <>
        <div className="container">
          <main>
            {
              this.props.foods.map((food, index) => {
                return <FoodItem key={food.id} index={index} food={food} month={this.props.month}/>
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
    month: state.month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (m) => { dispatch(getInSeasonFoods(m)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
