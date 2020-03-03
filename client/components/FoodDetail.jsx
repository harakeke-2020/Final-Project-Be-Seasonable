import React from 'react'
import { connect } from 'react-redux'

import { getFoodDetails } from '../actions/getFoodDetailsActions'
import { getMonthName } from '../utils'
import MetaTag from 'react-meta-tags'

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
  }

  render () {
    return (
      <>
        <MetaTag>
          <meta property="og:description" content={`Details about ${this.props.food.name} in ${this.props.month}`}/>
          <meta property="og:description" content={`Details about ${this.props.food.name} in ${this.props.month}`}/>
          <meta property="og:title" conetent="Be Seasonable"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`be-seasonable.herokuapp.com/food/${this.props.food.id}/${this.props.match.params.index}`}/>
          <meta property="og:image" content={`be-seasonable.herokuapp.com/${this.props.food.image}`}/>
          <meta name="twitter:card" content='summary'/>
          <meta name="twitter:title" content='Be Seasonable'/>
          <meta name="twitter:description" content={`Details about ${this.props.food.name} in ${this.props.month}`}/>
          <meta name="twitter:image" content="/apples.png"/>
        </MetaTag>
        <div className={this.className()} >
          <img className="header" data-aos="fade-down" data-aos-delay="100" src={this.props.food.image}/>
          <article className="detailpage">
            <div className="detaildiv">
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
                {this.props.food.firstMonth !== null
                  ? <p data-testid="month-range">{getMonthName(this.props.food.firstMonth)} to {getMonthName(this.props.food.lastMonth)}</p>
                  : <p data-testid="all-year">Available all year round.</p> }
                <label>Source country when in season:</label>
                {this.props.food.nzGrown === 1
                  ? <p data-testid="nz-grown">New Zealand grown</p>
                  : <p data-testid="overseas-grown">Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.</p>}
                <label>Details:</label>
                <p>{this.props.food.details}</p>
                <label>Info sourced from:</label>
                <ul>
                  <li>
                    <a href={this.props.food.infoLink}>{this.props.food.infoLink}</a></li>
                </ul>

              </section>
              <section>
                <div className="chart">
                  <iframe src={`https://figure.nz/be-seasonable/${this.props.food.chart}`}></iframe>
                </div>
              </section>
            </div>
          </article>
        </div>
      </>
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
