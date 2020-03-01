import React from 'react'

import Flag from './Flag'

const date = new Date()
const month = date.getMonth() + 1

const FoodItem = (props) => {
  return (
    <article data-aos="fade-up" >
      <div>
        <span><h3 data-testid={'foodItem'}>{props.food.reoName}</h3>   <h3>{props.food.name}</h3></span>
        <span><h3>${props.food.price}</h3> <h3>/ kg</h3></span>
        {
          props.food.nzGrown === month &&
            <Flag message={'Imported year round, high carbon footprint!'} />
        }
        {
          props.food.lastMonth === month &&
          <Flag message={'End of season!'} />
        }
        {
          props.food.firstMonth === month &&
          <Flag message={'Just in!'} />
        }
      </div>
      <div>
        <img data-aos="fade-left" data-aos-delay="100" src={ props.food.image } />
      </div>
    </article>
  )
}

export default FoodItem
