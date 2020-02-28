import React from 'react'
import { connect } from 'react-redux'

function Waiting (props) {
  return props.waiting
    ? <div data-testid={'waiting'}>
      <img style={{ width: '200px' }} src='/placeholder.gif' alt='🌶️ HOLD UP BUDDY 🌶️' />
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Waiting)
