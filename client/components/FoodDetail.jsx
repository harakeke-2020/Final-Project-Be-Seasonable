import React from 'react'
import { connect } from 'react-redux'

import { getFoodDetails } from '../actions/getFoodDetailsActions'

class FoodDetail extends React.Component {
  state = {
    food: 'loading',
    class: 'container'
  }

  componentDidMount = () => {
    const food = this.props.location.state.food
    console.log(food)
    food.index = food.index + 1
    if (food.index > 4) {
      food.index = food.index % 4
    }
    const container = 'container ' + 'container' + food.index
    console.log(food)
    this.setState(
      {
        food: food,
        class: container
      }
    )
  }

  render () {
    return (
      <div className={this.state.class} >
        <img className="header" data-aos="fade-down" data-aos-delay="100" src={this.state.food.image}/>
        <article className="detailpage">
          <div>
            <section>
              <span><h1>{this.state.food.reoName}</h1><p className="detaillarge">{this.state.food.name}</p></span>
            </section>
            <section>
              <label>10 year average price this month:</label>
              <span><h3 className="detaillarge">${this.state.food.price}</h3> <h3 className="detaillarge">/ kg</h3></span>
            </section>
            <section>
              <label>In season from: </label>
              {this.state.food.firstMonth !== null ? <p> {getMonthName(this.state.food.firstMonth)} to {getMonthName(this.state.food.lastMonth)}</p> : <p> Available all year round.</p> }
              <label>Source country when in season:</label>
              {this.state.food.nzGrown === 1 ? <p>New Zealand grown</p> : <p>Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.</p>}
            </section>
          </div>
        </article>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    food: state.food,
    month: state.month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodDetails: (m) => { dispatch(getFoodDetails(m)) }
  }
}

const getMonthName = (month) => {
  switch (month) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail)
