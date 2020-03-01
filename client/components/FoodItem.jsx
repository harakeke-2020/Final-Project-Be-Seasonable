import React from 'react'

import Flag from './Flag'

const FoodItem = (props) => {
  return (
    <article data-aos="fade-up" >
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
      <div>
        <img data-aos="fade-left" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
      </div>
    </article>
  )
}

export default FoodItem
