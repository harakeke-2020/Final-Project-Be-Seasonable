import React from 'react'

class FoodDetail extends React.Component {
  state = {
    food: 'loading',
    class: 'container'
  }

  componentDidMount = () => {
    const food = this.props.location.state.food
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
        <img className="header" data-aos="fade-down" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
        <article>
          <div>
            <span><h1>{this.state.food.reoName}</h1><p className="englishname">{this.state.food.name}</p></span>
            <span><h3>${this.state.food.price}</h3> <h3>/ kg</h3></span>
            <p>In season from {this.state.food.firstMonth} to {this.state.food.lastMonth}</p>
            <p>Source country when in season:</p>
            {this.state.food.nzGrown === 1 ? <p>New Zealand grown</p> : <p>Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.</p>}
          </div>
        </article>
      </div>
    )
  }
}

export default FoodDetail
