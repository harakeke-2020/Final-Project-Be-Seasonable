import React from 'react'

const FoodItem = (props) => {
  return (
    <article data-aos="fade-up" >
      <div>
        <span><h3 data-testid={'foodItem'}>{props.food.reoName}</h3>   <h3>{props.food.name}</h3></span>
        <span><h3>${props.food.price}</h3> <h3>/ kg</h3></span>
      </div>
      <div>
        <img data-aos="fade-left" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
      </div>
    </article>
  )
}

export default FoodItem
