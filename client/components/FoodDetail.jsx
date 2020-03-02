import React from 'react'
import { connect } from 'react-redux'

import { getFoodDetails } from '../actions/getFoodDetailsActions'
import { getMonthName } from '../utils'

class FoodDetail extends React.Component {
  className = () => {
    let index = Number(this.props.match.params.index) + 1
    if (index > 4) {
      index = index % 4
    }
    return 'container ' + 'container' + index
  }

  componentDidMount = () => {
    const { getFoodDetails } = this.props
    getFoodDetails(this.props.month, Number(this.props.match.params.id))
    console.log(this.props)
  }

  render () {
    return (
      <div className={this.className()} >
        <img className="header" data-aos="fade-down" data-aos-delay="100" src={this.props.food.image}/>
        <article className="detailpage">
          <div>
            <section>
              <span data-testid='reo-name'><h1>{this.props.food.reoName}</h1><p className="detaillarge">{this.props.food.name}</p></span>
            </section>
            <section>
              <label>{getMonthName(this.props.month)} average price:</label>
              <span><h3 className="detaillarge">${this.props.food.price}</h3> <h3 className="detaillarge">/ kg</h3></span>
              <label>Average price since 2006:</label>
              <span><h3 className="detaillarge">${this.props.food.averagePrice}</h3> <h3 className="detaillarge">/ kg</h3></span>
            </section>
            <section>
              <label>In season from: </label>
              {this.props.food.firstMonth !== null ? <p> {getMonthName(this.props.food.firstMonth)} to {getMonthName(this.props.food.lastMonth)}</p> : <p> Available all year round.</p> }
              <label>Source country when in season:</label>
              {this.props.food.nzGrown === 1 ? <p>New Zealand grown</p> : <p>Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.</p>}
              <label>Details:</label>
              <p>{this.props.food.details}</p>
            </section>
            <section className="chart">
              <iframe src="https://figure.nz/be-seasonable/WNZOpEoBKRyz4hBh-kpiumjjAxI9LmsSz"></iframe>
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
    getFoodDetails: (month, id) => { dispatch(getFoodDetails(month, id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail)
