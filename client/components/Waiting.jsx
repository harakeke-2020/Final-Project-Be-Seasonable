import React from 'react'
import { connect } from 'react-redux'

function Waiting (props) {
  return props.waiting
    ? <div data-testid={'waiting'}>
      <img className="wait" style={{ width: '200px' }} src='/waiting.gif' alt='🌶️ HOLD UP BUDDY 🌶️' />
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Waiting)
