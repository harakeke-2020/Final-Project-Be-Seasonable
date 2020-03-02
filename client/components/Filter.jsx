import React from 'react'
import { connect } from 'react-redux'

import { filterChange } from '../actions/filter'

const Filter = (props) => {
  const changeHandler = (value) => {
    props.dispatch(filterChange(value))
  }

  return (
    <div>
      <label>Filter results:</label>
      <select onChange={() => changeHandler(event.target.value)}>
        <option value="all">All</option>
        <option value="locallyGrown">Locally Grown</option>
        <option value="newSeason">New Season</option>
        <option value="endOfSeason">End of Season</option>
      </select>
    </div>
  )
}

export default connect()(Filter)
