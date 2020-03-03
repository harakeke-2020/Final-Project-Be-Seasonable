import React from 'react'
import { connect } from 'react-redux'

function Waiting (props) {
  return props.waiting
    ? <div data-testid={'waiting'}>
      <video loop="true" autoPlay="true" muted="true" playsInline="true" style={{ width: '200px' }} src='/waiting.mp4' alt='🌶️ HOLD UP BUDDY 🌶️' />
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Waiting)
