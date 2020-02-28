import React from 'react'

const FoodItem = (props) => {
  return (
    <article>
      <img src='https://static.wixstatic.com/media/cd21c2_a30e77a328924f3092caffab54ea19a1~mv2.jpg/v1/fill/w_476,h_556,al_c,lg_1,q_85/cd21c2_a30e77a328924f3092caffab54ea19a1~mv2.jpg'/>
      <div>
        <h2 data-testid={'foodItem'}>{props.food.reoName}</h2>
        <h3>{props.food.name}</h3>
        <h3>{props.food.price}</h3>
      </div>
    </article>
  )
}

export default FoodItem
