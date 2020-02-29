import React from 'react'

const FoodItem = (props) => {
  return (
    <article data-aos="fade-up" >
      <div>
        <h3 data-testid={'foodItem'}>{props.food.reoName}</h3>
        <p>{props.food.name}</p>
        <p>${props.food.price}</p>
      </div>
      <div>
        <img data-aos="fade-left" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
      </div>
    </article>
  )
}

export default FoodItem
