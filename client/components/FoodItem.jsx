import React from 'react'

import Flag from './Flag'

const FoodItem = (props) => {
  return (
    <article data-aos="fade-up" >
      <div>
        <h3 data-testid={'foodItem'}>{props.food.reoName}</h3>
        <p>{props.food.name}</p>
        <p>${props.food.price}</p>
        {
          props.food.nzGrown === 0 &&
            <Flag message={'Imported year round -- high carbon footprint.'} />
        }
      </div>
      <div>
        <img data-aos="fade-left" data-aos-delay="100" src='https://clipartart.com/images/apple-bitten-clipart-18.png'/>
      </div>
    </article>
  )
}

  const lastMonthTrue = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    
    

  }

export default connect(mapStateToProps)(FoodItem)
