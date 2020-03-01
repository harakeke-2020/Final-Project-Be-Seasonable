import React from 'react'
import { Link } from 'react-router-dom'

import Flag from './Flag'

const FoodItem = (props) => {
  return (
    <Link to={{
      pathname: `/food/${props.food.id}`,
      state: {
        food: props.food
      }
    }}
    >
      <article className="home" data-aos="fade-up" >
        <div>
          <span><h3 data-testid={'foodItem'}>{props.food.reoName}</h3>   <h3>{props.food.name}</h3></span>
          <span><h3>${props.food.price}</h3> <h3>/ kg</h3></span>
          {
            props.food.nzGrown === 0 &&
            <Flag message={'Imported year round, high carbon footprint!'} />
          }
          {
            props.food.lastMonth === props.month &&
          <Flag message={'End of season!'} />
          }
          {
            props.food.firstMonth === props.month &&
          <Flag message={'Just in!'} />
          }
        </div>
        <div className="homeFood">
          <img data-aos="fade-left" data-aos-delay="100" src={ props.food.image } />
        </div>
      </article>
    </Link>
  )
}

export default FoodItem
