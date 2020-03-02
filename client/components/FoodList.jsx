import React from 'react'
import { connect } from 'react-redux'
import MetaTag from 'react-meta-tags'

import FoodItem from './FoodItem'
import Filter from './Filter'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'
import { getFilteredArray } from '../utils/filiterUtils'

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
        <MetaTag>
          <meta name="description" content={`Foods that are in season in ${this.props.month}`}/>
          <meta property="og:description" conetent={`Foods that are in season in ${this.props.month}`}/>
          <meta property="og:title" conetent="Be Seasonable"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="be-seasonable.herokuapp.com" />
          <meta property="og:image" content="/apples.png" />
          <meta name="twitter:card" content='summary'/>
          <meta name="twitter:title" content='Be Seasonable'/>
          <meta name="twitter:description" content={`Foods that are in season in ${this.props.month}`}/>
          <meta name="twitter:image" content="/apples.png"/>
        </MetaTag>
        <div className="container">
          <Filter />
          <main>
            {
              this.props.foods.map((food, index) => {
                food.index = index
                return <FoodItem key={food.id} food={food} month={this.props.month}/>
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
    filter: state.filter,
    foods: getFilteredArray(state.foodList, state.month, state.filter),
    month: state.month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (m) => { dispatch(getInSeasonFoods(m)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
