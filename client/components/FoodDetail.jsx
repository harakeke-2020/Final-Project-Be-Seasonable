import React from 'react'

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
        <img className="header" data-aos="fade-down" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
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
              <p>{this.state.food.firstMonth} to {this.state.food.lastMonth}</p>
              <label>Source country when in season:</label>
              {this.state.food.nzGrown === 1 ? <p>New Zealand grown</p> : <p>Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.</p>}
            </section>
            <iframe src="https://figure.nz/stuff-embed/WNZOpEoBKRyz4hBh-wspyrryM3sB8RRq4"></iframe>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodDetail
