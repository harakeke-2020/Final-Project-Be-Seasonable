import React from 'react'
import { Link } from 'react-router-dom'

import Flag from './Flag'

const FoodItem = (props) => {
  const price = Number(props.food.price)
  return (
    <Link to={`/food/${props.food.id}/${props.index}`}>
      <article className="home" data-aos="fade-up" >
        <div>
          <span><h3 data-testid={'foodItem'}>{props.food.reoName}</h3>   <h3>{props.food.name}</h3></span>
          <div className="prices">
            <span><label>Average monthly price</label></span>
            <span><h3>${price.toFixed(2)}</h3> <h3>/ kg</h3></span>
          </div>
          {
            (props.food.nzGrown === 0 || props.food.nzGrown === false) &&
            <div data-testid={'import'} >
              <Flag message={'Imported year round, high carbon footprint!'} />
            </div>
          }
          {
            props.food.lastMonth === props.month &&
            <div data-testid={'last-month'}>
              <Flag message={'End of season!'} />
            </div>
          }
          {
            props.food.firstMonth === props.month &&
            <div data-testid={'first-month'}>
              <Flag message={'Just in!'} />
            </div>
          }
        </div>
        <div className="homeFood">
          <img data-aos="fade-left" data-aos-delay="100" src={`/images/${props.food.image}`} />
        </div>
      </article>
    </Link>
  )
}

export default FoodItem
