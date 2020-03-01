import React from 'react'

const Flag = (props) => {
  return (
    <section className="flag">
      <img src="alert.svg" alt="Exclamation point"></img>
      <p>{props.message}</p>
    </section>
  )
}

export default Flag
