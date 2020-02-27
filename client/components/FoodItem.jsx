import React from 'react'

const FoodItem = (props) => {
  return (
    <>
      <h2>{props.food.reoName}</h2>
      <h3>{props.food.name}</h3>
      <h3>{props.food.price}</h3>
    </>
  )
}

export default FoodItem
