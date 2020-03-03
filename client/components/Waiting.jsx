import React from 'react'
import { connect } from 'react-redux'

function Waiting (props) {
  return props.waiting
    ? <div data-testid={'waiting'}>
      <video loop="true" autoPlay="true" muted="true" playsInline="true" style={{ width: '200px' }}>
        <source src='/waiting.webm' alt='🌶️ HOLD UP BUDDY 🌶️' type="video/webm" />
        <source src='/waiting.mp4' alt='🌶️ HOLD UP BUDDY 🌶️' type="video/mp4"/>
      </video>
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Waiting)
